# questions

## 1. explain

```scheme
> null
'()
> '()
'()
> (eq? null '())
#t
> (eq? 'null ''())
#f
```

## 2. why not same

```scheme
> (eq? (quote 1) 1)
#t
> (eq? (quote a) a)
#f
> a
'()
> (define y a)
> (eq? (quote a) y)
#f
```

## 3. litteral?

能否写一个函数 `car l`，使其返回 `l` 的第一个字符？

不同于 `car '(+ 2 3)` 会得到 `'+`，能否有 `car1 (+ 2 3)` 得到 `'+`？

感觉不行，默认是按值传递的。
