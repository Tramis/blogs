# 抽象解法合集

## 裂项

$$
\begin{aligned}
\int \frac {1+x^2} {1+x^4} dx
&=\int \frac {1+x^2} {(1+x^2)^2 - 2x^2}\\
&=\int \frac 1 {2+2x^2 - 2\sqrt 2 x} + \frac 1 {2+2x^2 + 2\sqrt 2 x}dx\\
&=\int \frac 1 {(\sqrt 2 x -1)^2 + 1} + \frac 1 {(\sqrt 2 x + 1)^2 + 1}dx\\
&=\frac 1 {\sqrt{2}} (\arctan (\sqrt{2}x - 1) + \arctan (\sqrt{2}x + 1)) + C\\
&=\frac 1 {\sqrt{2}} \arctan(\frac {2x^2} {2 - 2x^2}) + C
\end{aligned}
$$

$$
\begin{aligned}
f'(0) &= \lim \frac {f(x) - f(0)} {x}\\
&= \lim \frac {g(x) - g(0)} {x^2}\\
&=\lim \frac {g'(\xi) -g'(0)} {x}\\
&=\lim \frac {g'(\xi) -g'(0)} {\xi} \frac {\xi} {x}\\
&=g''(0) \lim  \frac {\xi} {x}
\end{aligned}
$$

## 嗯凑

$$
\begin{aligned}
\int\frac {\cos x} {\cos x + 2\sin x} dx
&= \int \frac {\cos x - 1/2 \cos x - \sin x} {\cos x + 2\sin x} + \frac 1 2 dx\\
&=\int \frac {\frac 1 2d(\cos x + 2\sin x)} {\cos x + 2\sin x} + \frac 1 2 x\\
&=\frac 1 2(\ln (\cos x + 2\sin x) + x ) + C
\end{aligned}
$$

## 指数带拖油瓶

$$
\begin{aligned}
\int \frac {1+2x} {x^2} e^{-2x}dx
&= -\int d\frac {e^{-2x}} {x}
\end{aligned}
$$
