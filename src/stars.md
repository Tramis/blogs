# stars

直到 `*-functions` 这一章，作者用上了他定义的所有东西。其迭代的对象有

1. `(cons atom list)`
2. `(cons number list)`
3. `(cons s-expression list)`

从这时起，每次 `l` 上的迭代都将判断三块地方

1. `(null? l)`，其为边界条件
2. `(atom? (car l))`，若 `#t`，则在 `(car l)` 上递归
3. `else`，在 `(cdr l)` 上递归

例如 `occur*`

```scheme
(define (occur* a l)
  (cond
    ((null? l) 0)
    ((atom? (car l))
     (cond
       ((eq? a (car l)) (add1 (occur* a (cdr l))))
       (else (occur* a (cdr l)))))
    (else (+ (occur* a (car l)) (occur* a (cdr l))))))
```

关于 `leftmost`

```scheme
(define (leftmost l)
  (cond
    ((null? l) null)
    ((atom? (car l)) (car l))
    (else
     (cond
       ((null? (leftmost (car l)))
        (leftmost (cdr l)))
       (else (leftmost (car l)))))))
```

实际上不需要去问 `(cdr l)`，因为此处左侧要么存在一个 `atom`，要么为 `null`，因而只需要考虑 `(car l)`

```scheme
(define (leftmost1 l)
  (cond
    ((null? l) null)
    ((atom? (car l)) (car l))
    (else (leftmost1 (car l)))))
```

书上给的答案是

```scheme
(define (leftmost2 l)
  (cond
    ((atom? (car l)) (car l))
    (else (leftmost2 (car l)))))
```

其假设 `l` 的左侧非 `null`

不清楚实际写代码，如果出了 `null` 怎么办。是 `lisp` 不容易出现这种问题吗？

## `eqlist?`

首先，写了一个判断两个 `list` 是否相等的判定函数 `eqlist?`

```scheme
(define (eqlist? l r)
  (cond
    ((and (null? l) (null? r)) #t)
    ((or (null? l) (null? r)) #f)
    (else
     (cond
       ((and (atom? (car l)) (atom? (car r)))
        (and (eq? (car l) (car r))
             (eqlist? (cdr l) (cdr r))))
       ((or (atom? (car l)) (atom? (car r))) #f)
       (else (and (eqlist? (car l) (car r))
                  (eqlist? (cdr l) (cdr r))))))))
```

然后，利用这个函数来写一个判定 `s-expression` 是否相等的函数 `equal?`

```scheme
(define (equal l r)
  (cond
    ((and (atom? l) (atom? r)) (eq? l r))
    ((or (atom? l) (atom? r)) #f)
    (else (eqlist? l r))))
```

最后，用 `equal?` 倒回来替换掉 `eqlist?` 中 `s-expression` 的比较：

```scheme
; modified `eqlist?`
(define (eqlist? l r)
  (cond
    ((and (null? l) (null? r)) #t)
    ((or (null? l) (null? r)) #f)
    (else (and (equal? (car l) (car r))
               (eqlist? (cdr l) (cdr r))))))

; use this `equal?`
(define (equal? l r)
  (cond
    ((and (atom? l) (atom? r)) (eq? l r))
    ((or (atom? l) (atom? r)) #f)
    (else (eqlist? l r))))
```

这形成了一个相互递归调用，它的收敛性我不好说

只能勉强看出来，每次调用的过程中，参数都在变，而且应该是作为 `list` 变短了。这很符合书中所述的某一条 *Commandment*
