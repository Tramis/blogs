# 泰勒级数与递归的柯西中值

若 $f(x)$ 在一段区间上连续，则

$$
\begin{aligned}
f(x)
&=f(x_0) + f'(\xi)(x-x_0)
\end{aligned}
$$

若 $f(x)$ 在区间上无穷可微，则

$$
\begin{aligned}
f(x)
&=f(x_0) + f'(\xi_1)(x-x_0)\\
&=f(x_0) + (f'(x_0) + f''(\xi_2)(\xi_1-x_0))(x-x_0)\\
&=f(x_0) + f'(x_0)(x-x_0) + f''(\xi_2)(\xi_1-x_0)(x-x_0)\\
&=f(x_0) + f'(x_0)(x-x_0) + f''(x_0)(\xi_1-x_0)(x-x_0) + f''(\xi_3)(\xi_2-x_0)(\xi_1-x_0)(x-x_0)\\
&=f(x_0) + f'(x_0)(x-x_0) + f''(x_0)(\xi_1-x_0)(x-x_0) + f''(x_0)(\xi_2-x_0)(\xi_1-x_0)(x-x_0) + f''(\xi_4)(\xi_3-x_0)(\xi_2-x_0)(\xi_1-x_0)(x-x_0)\\
&=...
\end{aligned}
$$

看起来与泰勒展开很像，但是仍有差距，只能说上面的本意是好的，都是下面的人执行歪了

## 拉格朗日余项

出于简便考虑，这里全部取 $x_0 = 0$

$$
f(x) = f(0) + f'(0)x + \frac {f''(0)} {2!}x^2 + \frac {f^{(3)}(0)} {3!}x^3 +  \frac {f^{(4)}(\xi)} {4!}x^4
$$

其中 $\frac {f^{(4)}(\xi)} {3!}x^3$ 称为拉格朗日余项，记为 $R_4(x)$

下面证明上式，构造 $F(x)$：

$$
F(x) = f(x) - \big(f(0) + f'(0)x + \frac {f''(0)} {2!}x^2 + \frac {f^{(3)}(0)} {3!}x^3\big)
$$

则 $F(x)$ 有性质 $F(0) = F'(0) = F''(0) = F^{(3)}(0) = 0$，且对于更高阶导，$F^{(4)}(x) = f^{(4)}(x)$

由柯西中值定理：

$$
\begin{aligned}
F(x)
&=F(x) - F(0)\\
&=x^4 \frac {F(x) - F(0)} {x^4 - 0}\\
&=x^4 \frac {F'(\xi_1)} {4\xi_1^3}\\
&=x^4 \frac 1 4 \frac {F'(\xi_1) - F'(0)} {\xi_1^3 - 0}\\
&=x^4 \frac {1} {4} \frac {F''(\xi_2)} {3\xi_2^2}\\
&...\\
&=x^4 \frac 1 4 \frac 1 3 \frac 1 2 \frac {F^{(4)}(\xi_4)} {\xi_4^0}\\
&= \frac {x^4} {4!} F^{(4)}(\xi_4)\\
&= \frac {x^4} {4!} f^{(4)}(\xi_4)
= R_4(x)
\end{aligned}
$$

## 从拉格朗日余项到皮亚诺余项

对拉格朗日余项取极限是显然的

$$
\lim_{x\to 0} \frac {f(x)} {x^3} = \lim_{x\to 0} \frac x {4!}f^{(4)}(\xi_4) = 0
$$

## 显式递归

$$
\begin{aligned}
f(x)
&=f(x_0) + (x-x_0) \frac {f(x) -f(x_0)} {x-x_0}\\
&=f(x_0) + (x-x_0) f'(\xi_1)\\
&=f(x_0) + (x-x_0) f'(\xi_1)\\
\end{aligned}
$$
