# reverse list

翻转代数类型的链表还挺复杂的

```scheme
(cons c (cons a (cons t null)))

=>

(cons t (cons a (cons c null)))
```

这个完全翻转的过程很容易让人联想到利用 `lambda` 来把参数调用顺序翻过来的过程：

```scheme
(define (rev&f l f)
  (cond
    ((null? l) (f null))
    (else (rev&f (cdr l) (lambda (new-l)
                           (cons (car l) (f new-l)))))))

(define (rev l) (rev&f l (lambda (l) null)))
```

想象一下，最后反过来调用的过程应该长这样：

```scheme
(lambda (new-l3)
    (cons t
        ((lambda (new-l2)
            (cons a 
                ((lambda (new-l1)
                    (cons c
                        (f 
                        new-l1)))
                new-l2)))
        new-l3))) 
null
```

可以看到 `null` 从 `new-l3` 传到 `new-l2`，再到 `new-l1`，一层层地被传递到最里面

那么有没有办法不通过函数调用，而是直接传到最里面呢？毕竟大伙都知道最里面肯定是个 `null`

emmm...

```scheme
(define (rev&f l f)
  (cond
    ((null? l) (f))
    (else (rev&f (cdr l) (lambda ()
                           (cons (car l) (f)))))))

(define (rev l) (rev&f l (lambda () null)))
```

...silly of me

...

想复杂了好像

```scheme
(define (rev-helper l new-l)
  (cond
    ((null? l) new-l)
    (else (rev-helper (cdr l) (cons (car l) new-l)))))

(define (rev1 l) (rev-helper l null))
```
