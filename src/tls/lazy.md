# lazy(WIP)

在提取 `length` 里面 `(mk-length mk-length)` 的时候，利用 `lambda` 包一层实现了惰性，问：

```scheme
(a a)

(lambda (x)
    ((a a) x))
```

有什么区别

在正常求值的时候应该看不出来区别，然而在作为参数传递的时候区别很大：

```scheme
(define (do-x f x)
    (f x))

(do-x (a a) 1)
；先求值 (a a)，再代入

(do-x (lambda (x)
        ((a a) x)) 1)
->
((lambda (x) ((a a) x)) 1)
->
((a a) 1)
```
