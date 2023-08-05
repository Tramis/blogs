# a transformation

已知 $g(x)$ 求 $g'(x)$

$$
\begin{aligned}
g(x)
&=\int_0^x tf(x+t)dt\\
&=\int_x^{2x}(u-x)f(u)du\\
&=\int^{2x}_xuf(u)du - x\int_x^{2x}f(u)du
\end{aligned}
$$

$$
\begin{aligned}
g'(x)
&=(4x)f(2x) - xf(x) - \int_x^{2x}f(u)du - x(2f(2x) - f(x))\\
&=2xf(2x) - x\int_x^{2x}f(u)du
\end{aligned}
$$
