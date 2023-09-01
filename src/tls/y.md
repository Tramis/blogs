# y(WIP)

`TLS` 里最终抽象出来的 `Y` 组合子长这样：

```scheme
(define Y
    (lambda (le)
        ((lambda (f) (f f))
         (lambda (f) 
            (le (lambda (x) ((f f) x)))))))
```

里边稍微 `apply` 一层就跟经典的长得一样了：

```scheme
(define Y
    (lambda (le)
        ((lambda (f)
            (le (lambda (x) ((f f) x))))
         (lambda (f)
            (le (lambda (x) ((f f) x)))))))
```

注意 `(lambda (x) ((f f) x))` 其实就是 `(f f)`，这里为了惰性求值包了一层。

```scheme
(define Y
    (lambda (le)
        ((lambda (f)
            (le (f f)))
         (lambda (f)
            (le (f f))))))

(define fact
  (Y (lambda (fact1)
       (lambda (n)
         (cond
           ((= n 1) 1)
           (else (* n (fact1 (sub1 n)))))))))

(fact 1)
(fact 2)
(fact 3)
(fact 5)
```

上述写法会无穷递归
