# 二元函数中的隐函数相关问题

把微分以向量看待，全微分和偏导之间的关系很有意思

## 一阶偏导

$$
F(x, y, z) = 0 \Longrightarrow \frac {\partial F} {\partial x} + \frac {\partial F} {\partial z} \frac {\partial z} {\partial x} = 0
$$

我觉得这个式子的推导应该来自于全微分：

$$
\begin{aligned}
dF(x, y, z)
&= d0 = 0\\
&=\frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y} dy +\frac{\partial F}{\partial z} dz\\
&=\frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y} dy +\frac{\partial F}{\partial z} (\frac{\partial z}{\partial x} dx + \frac{\partial z}{\partial y} dy)
\end{aligned}
$$

因此，如果对 $x$ 求偏导，则 $dy=0$，于是上式变为:

$$
dF(x, y, z) =
\frac{\partial F}{\partial x} dx +\frac{\partial F}{\partial z} \frac{\partial z}{\partial x} dx = 0
$$

上面的推导没有对 $x, y$ 的约束，因此这二者可以不必正交

## 二元函数上的曲线

如果二元函数 $f(x, y)$ 上由 $f(x, y)=0$ 确定了一条曲线 $l$

考虑 $l$ 方向的方向导数乘上 $l$ 的全微分（$l$ 方向上的导数实际上是 $0$)

$$
\begin{aligned}
\frac{\partial f}{\partial l} dl = \frac{\partial f}{\partial l}(\frac{\partial l}{\partial x}dx + \frac{\partial l}{\partial y}dy)
\end{aligned} \tag{1}
$$

再对比直接考虑 $f$ 的全微分：

$$
\begin{aligned}
df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy \tag{2}
\end{aligned}
$$

在 $l$ 方向上 $df = 0$，由此得到

$$
\frac{dy}{dx} = - \frac{\partial f}{\partial x}/ \frac{\partial f}{\partial y} 
$$

但从 $(1)$ 式无法推出 $\frac {dy} {dx}$

$(1), (2)$ 两式的区别在哪。或者问 $(1), (2)$ 两个式子谁蕴含的信息更多

把 $(2)$ 式用 $l: y = l(x)$ 写为

$$
\begin{aligned}
df(x, l(x))
&= \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial l}dl\\
&= \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial l}\frac {dl} {dx} dx\\
\end{aligned}
$$

此式中的微分含义不再是全微分：既然用 $y=l(x)$ 来约束了 $x, y$ 之间的关系，则在特定点处该微分即为该点处 $l$ 方向的方向导数

可见全微分
