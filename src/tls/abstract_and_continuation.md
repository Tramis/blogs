# abstract and continuation

这章还没深入讲 `lambda`，只是将其作为抽象工具

## continuation

[Wiki](https://en.wikipedia.org/wiki/Continuation):

> In computer science, a continuation is an abstract representation of the control state of a computer program. A continuation implements (reifies) the program control state, i.e. the continuation is a data structure that represents the computational process at a given point in the process's execution; the created data structure can be accessed by the programming language, instead of being hidden in the runtime environment. Continuations are useful for encoding other control mechanisms in programming languages such as exceptions, generators, coroutines, and so on.

简单理解的话，感觉是把一个连续过程分解成从节点到节点，并且把节点以具体数据结构表示出来方便后续操作。有点像 `linux` 的文件系统，有点像流

## `multirember&co`

我不好说，这部分有点烧脑

```scheme
(define multirember&co
  (lambda (a lat col)
    (cond
      ((null? lat)
       (col '() '()))
      ((eq? a (car lat))
       (multirember&co a (cdr lat)
                       (lambda (newlat seen)
                         (col newlat (cons (car lat) seen)))))
      (else
       (multirember&co a (cdr lat)
                       (lambda (newlat seen)
                         (col (cons (car lat) newlat) seen)))))))
```

还是直接来个例子展开：

```scheme
(define a-friend
    (lambda (x y) (null? y)))

(multirember&co 2 '(1 2 3) a-friend)

=> (multirember&co 2 '(2 3)
                   (lambda (newlat seen)
                     (a-friend (cons 1 newlat) seen)))

=> (multirember&co 2 '(3)
                   (lambda (newlat' seen')
                     (lambda (newlat seen)
                       (a-friend (cons 1 newlat) seen))
                     newlat'
                     (cons 2 seen')))

=> (multirember&co 2 '()
                   (lambda (newlat'' seen'')
                     (lambda (newlat' seen')
                       (lambda (newlat seen)
                         (a-friend (cons 1 newlat) seen))
                       newlat'
                       (cons 2 seen'))
                     (cons 3 newlat'')
                     seen''))

=> ((lambda (newlat'' seen'')
      (lambda (newlat' seen')
        (lambda (newlat seen)
          (a-friend (cons 1 newlat) seen))
          newlat'
          (cons 2 seen'))
        (cons 3 newlat'')
        seen'')
      '()
      '())

=> ((lambda (newlat' seen')
      (lambda (newlat seen)
        (a-friend (cons 1 newlat) seen))
        newlat'
        (cons 2 seen'))
      (cons 3 '()) 
      '()))

=> ((lambda (newlat seen)
      (a-friend (cons 1 newlat) seen))
    (cons 3 '())
    (cons 2 '()))

=> (a-friend (cons 1 (cons 3 '()) (cons 2 '())))

=> #f
     
```

我不好说。

从这个展开来看，该函数会将 `l` 分成两个 `list`，前者是去掉 `a` 的 `l`，后者是所有的 `a`。

恕我直言，这个例子举得不是很好。一来这个函数的意义并不显然，二来难度曲线太大，手动模拟起来有些繁琐

## 已经解包

我觉得一个简单点的例子也许看的更清楚

写个函数 `remove-a&co x l col` 处理数字的 `list`，去掉 `l` 中的 `x` 并统计其个数

```scheme
(define (remove-a&co x l col)
  (cond
    ((null? l) (col '() 0))
    ((= x (car l))
     (remove-a&co x (cdr l)
                  (lambda (newl cnt)
                    (col newl (add1 cnt)))))
    (else (remove-a&co x (cdr l)
           (lambda (newl cnt)
             (col (cons (car l) newl) cnt))))))

; (remove-a&co 1 '(2 1 3 5 4 1)
;              (lambda (l cnt) (list l cnt)))

; 直接用 `list` 替代这个 `lambda`
(remove-a&co 1 '(2 1 3 5 4 1) list)

; output: 
;   '((2 3 5 4) 2)
```

用一个简单点的例子写一下展开过程：

```scheme
(remove-a&co 1 '(2 1 3) list)

->
(remove-a&co 1 '(1 3)
    (lambda (newl cnt)
        (list (cons 2 newl) cnt)))

->
(remove-a&co 1 '(3)
    (lambda (newl' cnt')
        (lambda (newl cnt)
            (list (cons 2 newl) cnt))
          newl'
          (add1 cnt')))

->
(remove-a&co 1 '()
    (lambda (newl'' cnt'')
        (lamdba (newl' cnt')
            (lambda (newl cnt)
                (list (cons 2 newl) cnt))
            newl'
            (add1 cnt'))
        (cons 3 newl'')
        cnt''))

->
((lambda (newl'' cnt'')
    (lamdba (newl' cnt')
        (lambda (newl cnt)
            (list (cons 2 newl) cnt))
        newl'
        (add1 cnt'))
    (cons 3 newl'')
    cnt'')
    '()
    0)

->
((lambda (newl' cnt')
    (lambda (newl cnt)
        (list (cons 2 newl) cnt))
        newl'
        (add1 cnt'))
    (cons 3 '())
    0)

->
((lambda (newl cnt)
    (list (cons 2 newl) cnt))
    (cons 3 '())
    1)

->
(list (cons 2 (cons 3 '())) 1)

; which is
;   '((2 3) 1)
```

`lambda` 嵌套 `lambda`，本该在过程式语言中最里侧的参数，在这里却是从最外侧传进去

数据传递以参数的形式进行，而没有解包的过程

## `evens-only*`

该函数过滤掉 `list` 中的奇数，并统计去掉奇数的个数。

此习题与之前的差不多，不过要求从 `list` 的左右两边同时递归，并整合两边递归的结果。

```scheme
(define (evens-only*&co l col)
  (cond
    ((null? l) (col '() 0))
    ((atom? (car l))
     (cond
       ((even? (car l))
        (evens-only*&co (cdr l)
                     (lambda (newl cnt)
                       (col (cons (car l) newl) cnt))))
       (else (evens-only*&co (cdr l)
                          (lambda (newl cnt)
                            (col newl (add1 cnt)))))))
    (else (evens-only*&co (cdr l)
                       (lambda (newld cntd)
                         (evens-only*&co (car l)
                                         (lambda (newla cnta)
                                           (col (cons newla newld)
                                                (+ cnta cntd)))))))))

(evens-only*&co '((9 1 2 8) 3 10 ((9 9) 7 6) 2) list)

; '(((2 8) 10 (() 6) 2) 6)
```

这个整合两侧的 `lambda` 很不好想。

之所以能写出这个 `collector`，我想是因为二叉树可以拉直成一条链

从回调函数的角度来理解，当 `(lambda (newl cnt) ...)` 定义出来时，就该假设其函数体定义里已经得到了 `newl, cnt` 的值，并且能够自由使用

嗯...

`callback` 可能是个不错的角度
