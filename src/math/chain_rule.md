# 链式求导

看看求导法则是不是该用极限来推一下

## 一元函数

可导函数 $f(x), x(t)$ 中，求导数

$$
\begin{aligned}
&\lim_{a\to 0} \frac {f(x(t+a)) - f(x(t))} {a}\\
=& \lim_{a\to 0} \frac {f(x(t+a)) - f(x(t))} {x(t+a) - x(t)} \frac {x(t+a) - x(t)} {a}\\
=& f'(x(t))x'(t)
\end{aligned}
$$

## 多元函数

可微函数 $f(x, y), x(u, v), y(u, v)$ 中，求导数

$$
\begin{aligned}
&\lim_{\vec h \to 0} \frac {f(x(\vec {(u, v)} + \vec h), y(\vec {(u, v)} + \vec h)) - f(x, y)} {||\vec{h}||}\\
=&\lim_{\vec h \to 0} \frac {f(x(\vec {(u, v)} + \vec h), y(\vec {(u, v)} + \vec h)) - f(x(\vec {(u, v)} + \vec h), y)} {||\vec{h}||} + \frac {f(x(\vec {(u, v)} + \vec h), y) - f(x, y)} {||\vec{h}||}\\
=&\lim_{\vec h \to 0} \frac {f(x(\vec {(u, v)} + \vec h), y(\vec {(u, v)} + \vec h)) - f(x(\vec {(u, v)} + \vec h), y)} {y(\vec {(u, v)} + \vec h) - y} \frac { y(\vec {(u, v)} + \vec h) - y} {||\vec{h}||} + \frac {f(x(\vec {(u, v)} + \vec h), y) - f(x, y)} {x(\vec {(u, v)} + \vec h) - x} \frac {x(\vec {(u, v)} + \vec h)} {||\vec{h}||}\\
=&f'_2\frac {dy} {d\vec h} + f'_1 \frac {dx} {d\vec h}\\
\end{aligned}
$$

将上面极限改为求偏导 $\frac {\partial{f}} {\partial{u}}$：

$$
\begin{aligned}
&\lim_{a \to 0} \frac {f(x(u+a, v), y(u+a, v)) - f(x, y)} {a}\\
=&\lim_{\vec h \to 0} \frac {f(x(u+a, v), y(u+a, v)) - f(x(u+a, v), y)} {a} + \frac {f(x(u+a, v), y) - f(x, y)} {a}\\
=&\lim_{\vec h \to 0} \frac {f(x(u+a, v), y(u+a, v)) - f(x(u+a, v), y)} {y(u+a, v) - y} \frac { y(u+a, v) - y} {a} + \frac {f(x(u+a, v), y) - f(x, y)} {x(u+a, v) - x} \frac {x(u+a, v)} {a}\\
=&f'_2y'_1 + f'_1 x'_1\\
\end{aligned}
$$

同理可求在 $y$ 轴方向求偏导：

$$
\frac {\partial{f}} {\partial{v}} = f'_1x'_2 + f'_2y'_2
$$

## 多元微分形式不变性

$$
\begin{aligned}
df
&= \frac {\partial{f}} {\partial{v}} dv + \frac {\partial{f}} {\partial{u}} du\\
&= (f'_1x'_1 + f'_2y'_1) du + (f'_1x'_2 + f'_2y'_2) dv\\
&= f'_1 (x'_1 du + x'_2 dv) + f'_2 (y'_1du + y'_2dv)\\
&= f'_1 dx + f'_2 dy &\text{全微分替换}
\end{aligned}
$$

这里实际上是要求 $f, x, y$ 都可微，但上面通过极限求复合偏导的时候并不需要，只要在要求方向可偏导即可
