# halt

> A's arguments, like shuffie's and looking's, do not necessarily decrease for the recursion.

第九章从几个函数出发简单介绍了一下停机和死循环。

它将最终会停机的函数称为 `total`，否则称为 `partial`。

以映射角度看函数，其居然有值无法到达陪域，因而称为 `partial function`

## 停机

这里给的证明是若函数 `will-stop?` 是 `total` 的，则：

```scheme
(will-stop? (lambda (x)
    (and (will-stop? last-try)
        (eternity x))))
```

会得到矛盾的值。

《计算理论导引》那书上的停机问题好像是归约到图灵机 $A_{TM}$ 不可判定上去

## $\lambda$ 递归

```scheme
(lambda (x) (x x))
```

这个例子相当引人入胜，用 $\lambda$ 构造出 `length` 来计算 `list` 的长度：

### 尝试

```scheme
(((lambda (mk-length)
   (mk-length mk-length))
 (lambda (length)
   (lambda (l)
     (cond
       ((null? l) 0)
       (else (add1
              (length (cdr l)))))))) 
 '())
```

这个仅能计算一层，展开的话是：

```scheme
->
(((lambda (length)
  (lambda (l)
    (cond
      ((null? l) 0)
      (else (add1
            (length (cdr l)))))))
  (lambda (length)
    (lambda (l)
      (cond
      ((null? l) 0)
       (else (add1
             (length (cdr l))))))))
  '())

->
((lambda (l)
    (cond
    ((null? l) 0)
    (else (add1
        ((lambda (length)
           (lambda (l)
            (cond
              ((null? l) 0)
              (else (add1
                (length (cdr l)))))))
           (cdr l))))))                 ; 本应传递一个 `length` 得到内部的 lambda，但传递了一个 `list`
  '())

->
0
```

可以看出来尚不足以进行长度大于 `0` 的递归，因为到后面 `length` 没有正确的参数传进去。

### 修复

```scheme
; 一步步改进
(((lambda (mk-length)
   (mk-length mk-length))
 (lambda (mk-length)
   (lambda (l)
     (cond
       ((null? l) 0)
       (else (add1
              ((mk-length eternity)
               (cdr l))))))))
 '(1))
```

这里放了个 `eternity` 虚位以待，然而并不能改变它算不了非空 `list` 的事实：

```scheme
->
(lambda (l)
  (cond
  ((null? l) 0)
  (else (add1
    ((lambda (mk-length)
      (lambda (l)
        (cond
          ((null? l) 0)
          (else (add1 
                  (mk-length (cdr l)))))))
      eternity                      ; 充其量
      (cdr l))))))

->
(lambda (l)
  (cond
    ((null? l) 0)
    (else (add1
      ((lambda (l')
          (cond
            ((null? l') 0)
            (else (add1 
                    (eternity (cdr l))))))
        (cdr l))))))
```

可以看出仅能递归两层。

接下来的任务是要用一个无穷递归来替换 `eternity`

### 无穷

为了让递归更明显，多写几层，无穷递归部分仍以 `eternity` 暂时代替

```scheme
(lambda (l)
(cond
((null? l) 0)
(else (add1
  (
    (lambda (l)
    (cond
    ((null? l) 0)
    (else (add1
      (
        (lambda (l)
        (cond
        ((null? l) 0)
        (else (add1
          (
            (lambda (l)
            (cond
            ((null? l) 0)
            (else (add1
              (
                (lambda (l)
                (cond
                ((null? l) 0)
                (else (add1
                  (
                    (lambda (l)
                    (cond
                    ((null? l) 0)
                    (else (add1
                      (
                        (lambda (l)
                        (cond
                        ((null? l) 0)
                        (else (add1
                          (
                            (lambda (l)
                            (cond
                            ((null? l) 0)
                            (else (add1
                              (
                                (lambda (l)
                                (cond
                                ((null? l) 0)
                                (else (add1
                                  (
                                    (lambda (l)
                                    (cond
                                    ((null? l) 0)
                                    (else (add1
                                      (
                                        (lambda (l)
                                        (cond
                                        ((null? l) 0)
                                        (else (add1
                                          (
                                            (lambda (l)
                                            (cond
                                            ((null? l) 0)
                                            (else (add1
                                              (
                                                eternity
                                            (cdr l))))))
                                        (cdr l))))))
                                    (cdr l))))))
                                (cdr l))))))
                            (cdr l))))))
                        (cdr l))))))
                    (cdr l))))))
                (cdr l))))))
            (cdr l))))))
        (cdr l))))))
    (cdr l))))))
(cdr l))))))
```

回过头看用 `eternity` 作为占位符的定义：

```scheme
((lambda (mk-length)
   (mk-length mk-length))
 (lambda (mk-length)
   (lambda (l)
     (cond
       ((null? l) 0)
       (else (add1
              ((mk-length eternity)
               (cdr l))))))))
```

最后真正想要得到的是这一部分：

```scheme
(lambda (l)
  (cond
    ((null? l) 0)
    (else (add1
            ((mk-length eternity)
             (cdr l))))))
```

并且想要用这一个整体自身来替换 `(mk-length eternity)`

```scheme
(lambda (l)
  (cond
    ((null? l) 0)
    (else (add1
            ((lambda (l)
              (cond
                ((null? l) 0)
                (else (add1
                        ((mk-length eternity)
                        (cdr l)))))))
             (cdr l))))))
```

换言之，我需要找到一个 `eternity` 满足

```scheme

(mk-length eternity) 

=

(lambda (l)
  (cond
    ((null? l) 0)
    (else (add1
            ((mk-length eternity)
             (cdr l))))))

```

然而答案一开始就给出来了：

```scheme
mk-length = 
(lambda (mk-length)
  (lambda (l)
    (cond
      ((null? l) 0)
      (else (add1
              ((mk-length eternity)
              (cdr l))))))))

(mk-length mk-length) = 
(lambda (l)
  (cond
    ((null? l) 0)
    (else (add1
            ((mk-length eternity)
            (cdr l))))))))
```

于是只需要取 `eternity` 在这里等于 `mk-length` 即可
