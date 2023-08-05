# 同阶无穷小的归化

$$
x^3 + x^4 \sim x^3
$$

$x^4$ 是比 $x^3$ 高阶的无穷小，这指的是其收敛到 $0$ 的速度更快

若 $\lim \frac {a_n} {b_n} = 0$，则称 $a_n$ 是 $b_n$ 的高阶无穷小

由极限的四则运算知 $\lim a_n = \frac 1 {\lim 1/a_n}$，因而两个无穷小之间的关系，要么是同阶（即比值极限为实数），要么互为高阶/低阶无穷小

$$
\lim_{x\to 0} \frac {x^3+x^4} {x^3} = 1 + 0 = 1 \ne 0
$$

## 拉格朗日中值

函数 $f(x)$ 相同，且 $x$ 逼近时，可以利用拉格朗日中值，将一个无穷小转化到另一个无穷小：

$$
\begin{aligned}
&\lim_{x\to 0} \ln (x+\sqrt{1+x^2}) - \ln (1+x)\\
=& \lim_{x\to 0} \frac 1 {\xi (x)} ((x+\sqrt{1+x^2}) - (1+x))\\
=& \lim_{x\to 0} \frac {\sqrt{1+x^2} - 1} {\xi (x)}\\
=&\lim_{x\to 0} \sqrt{1+x^2} - 1\\
\end{aligned}
$$

我不好说，$x+\sqrt{1+x^2}$ 和 $\ln (1+x)$ 同时趋于 $1$，这保证了 $\xi(x)$ 趋于 $1$，因而能得到一个值

$$
\begin{aligned}
&\lim_{x\to 0} \frac {\ln (x+\sqrt{1+x^2}) - \ln (1+x)} {x^2}\\
=& \lim_{x\to 0} \frac {\sqrt{1+x^2} - 1} {x^2}\\
=& \frac 1 2
\end{aligned}
$$

$$
\begin{aligned}
&\lim_{x\to +\infty} x^2 (\ln (x+\frac 1 x) - \ln x)\\
=& \lim_{x\to +\infty} x^2 \frac 1 {\xi(x)}(x+\frac 1 x - x)\\
=& \lim_{x\to +\infty}  \frac x {\xi(x)}\\
=& 1
\end{aligned}
$$

当然这个也可以直接用对数函数变换：

$$
\begin{aligned}
&\lim_{x\to +\infty} x^2 (\ln (x+\frac 1 x) - \ln x)\\
=& \lim_{x\to +\infty} x^2\ln (1+\frac 1 {x^2})\\
=& 1
\end{aligned}
$$

如果

$$
\begin{aligned}
\lim_{x\to +\infty} x^2 (\ln (x+\frac 1 x) - \ln x)
&= \lim_{x\to +\infty} x^2 \frac 1 {\xi(x)}(x+\frac 1 x - x)\\
&= \lim_{x\to +\infty}  \frac x {\xi(x)}\\
&= 1
\end{aligned}
$$

## $\ln (1+\frac 1 x)$ 相关的无穷大

$$
\begin{aligned}
&\lim_{x\to 0} \sqrt{4x^2+x} \ln (2+\frac 1 x)\\
=&\lim_{x\to 0} \sqrt{4x^2+x} (\ln (2x+1) - \ln x)\\
=&\lim_{x\to 0} \sqrt{4x^2+x} \ln (2x+1) - \sqrt{4x^2+x} \ln x\\
=&0
\end{aligned}
$$

减号两侧都是趋于 $0$，其差也趋于 $0$

这里用到了 $\lim_{x\to 0}x^a \ln x = 0$，只需 $a>0$

///

$若 f(x) = x+o(x)$ 则 $f^{-1}(x) \sim x$

$$
f(x) = \begin{cases}
x, &x\in \mathbb{Q}\\
-x, &\text{others}
\end{cases}
$$

