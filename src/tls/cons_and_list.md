# `cons` and `list`

## `atom`

序言中定义了 `atom?`:

```scheme
(define atom?
    (lambda (x)
        (and (not (pair? x)) (not (null? x)))))
```

即，不是 `pair`，也不是 `null` 的东西就叫 `atom`

```scheme
> (atom? null)
#f
> (atom? '(1 2 3))
#f

> (atom? #f)
#t
> (atom? 1)
#t
> (atom? "abc")
#t
```

怀疑这是不是书中自造的概念，我在 `The Racket Guide` 里没看到这个说法

## `pair`, `list` 和 `s-expression`

*reference* 中提到：

> In general, the result of cons is a pair. The more traditional name for the cons? function is pair?, and we’ll use the traditional name from now on.

也就是说 `cons` 是 `pair` 的构造子，`(cons a b)` 表示把 `a` 和 `b` 连在一起，构成一个 `pair`。

> 这一点与书中不一样。`TLS` 中并没有 `pair` 这一回事，而是只有 `list`，并将 `cons` 视为 `list` 的构造子，其第二个参数必须也是一个 `list`。
>
> 我这里还是采用 `racket` 实际的情况。
>
> 对此，书中提到一笔：
>> *In practice, `(cons a b)` works for all values `a` and `b`, and*
>>
>> `(car (cons a b)) = a`,
>> `(cdr (cons a b)} = b`

利用 `cons`，我们构造出 `list` 和 `s-expression`，按我理解，二者是递归定义的，以 CFG 写出来大概像这样:

```scheme
S-expression = 
    atom |
    list
```

```scheme
list = 
    null |
    (cons S-expression list)
```

`list`

1. 要么是 `null`
2. 要么是一个特殊的 `pair`。特殊在于该 `pair` 的第二个部分一定是一个 `list`。由此可知，`list` 必有类似以下的结构：

```scheme
(cons a (cons b (cons c (cons d null))))
```

一个例子是

```scheme
> (cons null null)
'(())
```

`racket` 中，`null` 也可以写作 `'()`。单引号是一个函数 [`quote`](#`quote`) 的简写

值得注意，`(cons a b)` 直接将 `a, b` 组成一个 `pair`，这不等于 `(list a b)`：

```scheme
> (cons 1 2)
'(1 . 2)
> (cons 1 '(2))
'(1 2)
> (list 1 2)
'(1 2)

> (list? (cons 1 2))
#f
> (pair? (cons 1 2))
#t
> (pair? (list 1 2))
# t
```

`'(a b)` 表示一个 `list`，而 `'(a . b)` 表示一个 `pair`。应该将前者看作后者的一种简写，`'(a b)` 写全了应该是 `'(a . (b . ()))`

# `quote`

> 还需理解 `datum`。`quote` 是否与其数据引用有关。

```scheme
'a = (quote a)
'(a b c) = (list 'a 'b 'c)
```

在 REPL 里测试一下：

```scheme
> '#t
#t
> '1
1
> '"abc"
"abc"

> '()
'()
> (list)
'()
> 'fdasfs
'fdasfs
```

一个层层展开的例子：

```scheme
''(1)
-> (quote '(1))
-> (quote (quote (list 1)))

> (car ''(1))
'quote
> (cdr ''(1))
'((1))
```

**分析一下**，首先，要理解 `(car ''(1))` 得到 `'quote` ，只需要理解 `(quote (quote (list 1)))` 是一个 `list`，它的左侧就是 `quote`

然后为了得到 `(cdr ''(1))`，这里把 `list` 看成 `pair`，即：

- `(quote (quote (list 1)))` 看作
- `(quote . ((quote (list 1))))`

再例如：

```scheme
> (car '(define a 1))
'define
> (car '(+ 1 2))
'+
```

这里有个关于 `null` 的，有点特别的例子：

```scheme
> null
'()
> '()
'()
> 'null
'null
> ''()
''()
> ''null
''null
```

# `null`

书中指出，`(quote ())` 是 `null` 的一种记号。

> Lisp: Also `()` and `'()`.
>
> Scheme: Also `'()`

实验一下:

```scheme
> (quote ())
'()
> (null? (quote ()))
#t
```

嗯... `()` 能单独出现在 `(quote ())` 里，这是否说明解释器以某种规则进行了特判。

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

有点神秘
