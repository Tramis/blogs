# 一些细微的问题

## 积分的换元

$$
\begin{aligned}
g(x)
&= \int_{-x}^0 tf(x+t)dt\\
&= \int_0^x (u-x)f(u)du
\end{aligned}
$$

- 为什么能这样换元
- 为什么这么换元能简化计算

## 开区间上原函数

已知闭区间上连续函数必有原函数，问：

$f(x)$ 在 $(a, b)$ 上连续，怎么证明 $f(x)$ 在 $(a, b)$ 上有原函数

## 无定义点的连续性

$$
f(x) = \begin{cases}
0, &x\text{ is rational}\\
1, &x=\sqrt 2\\
\text{undefined}, &\text{others}
\end{cases}
$$

问 $f(x)$ 在 $x=0$ 处是否连续

## 无定义点的积分与原函数

第一类间断点可以有定积分，但定积分在该点处不一定可导

原函数一定是可导的

## 这两个等价吗？

$$
\int_0^1 f(tx)dt=\int_0^xf(t)dt
$$

并不相等

$$
\begin{aligned}
\int_0^1 f(tx)dt
&=\int_0^x f(u)d(\frac 1 x u)\\
&=\frac 1 x \int_0^x f(u)du
\end{aligned}
$$

所以相当于在 $x$ 轴上放缩了 $\frac 1 x$，因为把原本 $(0, x)$ 的图像缩到了 $(0, 1)$

## 二元函数在不连续点的偏导的存在性

> 660: T227

$$
f(x, y) = \begin{cases}
\frac {x^2y} {x^4 + y^2}, &(x, y) \ne (0, 0)\\
0, &(x, y) = (0, 0)
\end{cases}
$$

在 $(0, 0)$ 处存在偏导吗，不可微是什么意思？

## 二元函数的极值怎么求？

我发现二元函数极值问题基本都假设函数性质足够好，而且只需要判断在某一点是否是极值点或者驻点

更难的概念是用隐函数来约束

## 二阶偏导数

二维分段函数的偏导数已经很麻烦了，更麻烦的是求二阶偏导数：

$$
f(x, y)=\begin{cases}
xy\frac {x^2 - y^2} {x^2 + y^2}, &(x, y)\ne (0, 0)\\
0, &\text{others}
\end{cases}
$$

分类来求：

$$
f'_x(0, 0) = \lim \frac {f(x, 0) - f(0, 0)} {x - 0} = 0
$$

$$
\begin{aligned}
f'_x(x, y)
&= \lim \frac {f(x, y) - f(x+\Delta x, y)} {\Delta x}\\
&= \frac{x^4y+4x^2y^3-y^5} {(x^2 + y^2)^2}
\end{aligned}
$$

进一步分类求二阶偏导：

$$
\begin{aligned}
f''_xy(0, 0)
&= \lim \frac {f'_x(0, y) - f'_x(0, 0)} {y-0}\\
&= \lim \frac {-y^5} {y^4 y}\\
&=-1
\end{aligned}
$$

非 $0$ 点太难算了就不算了

同样的求另一个混合偏导

$$
f'_y(0, 0) = \begin{cases}
0, &(0, 0)\\
\frac {x^5 - 4x^3y^2 - xy^4} {(x^2 + y^2)^2}, &\text{others}
\end{cases}
$$

于是求得 $(0, 0)$ 处的二阶偏导

$$
\begin{aligned}
f''_yx(0, 0)
&= \lim \frac {f'_y(x, 0) - f'_y(0, 0)} {x-0}\\
&= \lim \frac {x^5} {x^4 x}\\
&=1
\end{aligned}
$$

## 二元函数与参数方程

$$
\frac{df(x(t), y(t))}{dt} = \frac{\partial{f}}{\partial x} \frac {dx} {dt} +  \frac{\partial{f}}{\partial y} \frac {dy} {dt}
$$

上面这个式子里，$(x(t), y(t))$ 实际上描述了一条曲线，于是上面等式可以看作 $f$ 在曲线上每一点上的方向导数

## 二元函数逼近的线性曲线并不近似

二元函数 $f(x, y)$ 在 $(0, 0)$ 点处，以曲线 $y = g(x)$ 的轨迹逼近 $(0, 0)$，与以直线 $y = g'(0)x$ 的轨迹逼近 $(0, 0)$，二者取得相同的极限值吗？

$$
\lim_{x\to 0} f(x, g(x)) \xlongequal{?} \lim_{x\to 0} f(x, g'(0)x)
$$

答：并不

考虑以曲线 $y=e^{1/|x|}$ 逼近 $f(x, y)$，其中

$$
f_1(x, y) = \begin{cases}
0, &y = 0\\
1, &y\ne 0
\end{cases}
$$

或者以曲线 $y=x^2$ 逼近

$$
f_2(x, y) = \begin{cases}
0, &y = 2x\\
1, &y\ne 2x
\end{cases}
$$

这是否说明，只取直线轨迹 $l$，不能取遍 $\lim f(x, l(x))$ 的所有可能值？

能不能找一条直线 $y = h(x)$ 趋于 $(0, 0)$ 使得对于

$$
f_3(x, y) = \begin{cases}
0, &y=x^2\\
1, &\text{others}
\end{cases}
$$

满足 $\lim_{x\to 0} f_3(x, h(x)) = 0$

当然是不能的，因为直线过 $(0, 0)$ 则 $y = kx$ 或者 $k$ 不存在，只看 $y=kx$ 的情况，

$$
\lim_{x\to 0} f_3(x, h(x)) = \lim_{x\to 0} f_3(x, kx)
$$

在 $x\to 0$ 的过程中，$y=x^2$ 与 $y=kx$ 至多只有一个点能满足，那就是 $x=k$，因而该极限的聚点必为 $1$

但显然以 $y = x^2$ 的轨迹来接近，就能取到 $0$ 的极限

极坐标是另一个情况，相当于直接圈出去心邻域

[知乎写了一个](https://zhuanlan.zhihu.com/p/631702190)

## 收敛但导数无穷的级数

想象这样一个点列：

$$
(1, 1)\\
(1+ \frac 1 2, 1 - \frac 1 {\sqrt{2}})\\
(1+ \frac 1 2 + \frac 1 3, 1 + \frac 1 {\sqrt{2}}+  \frac 1 {\sqrt{3}})\\
(1+ \frac 1 2 + \frac 1 3 + \frac 1 4, 1 - \frac 1 {\sqrt{2}}+  \frac 1 {\sqrt{3}} - \frac 1 {\sqrt{4}})\\
...\\
(x_n, y_n)
$$

$x_n$ 发散，因而当 $x_n\to \infty$ 时，$y_n$ 收敛于常数，然而比值

$$
|\frac {y_n - y_{n-1}} {x_n - x_{n-1}}| = \sqrt n \to \infty
$$

也就是说如果将这些点连接起来，将得到一条折线，其收敛于常数，却在无穷远处无穷震荡

## 无穷次放缩

数列 $\{x_n\}$ 存在常数 $0<k<1$ 使得 $|x_{n+1}-a|\le k|x_n-a|$，$n=1,2...$，证明 $\{x_n\}\to a$

## 证

$\lim |x_n-a| \le \lim k^{n-1}|x_1 - a| = 0$

题目本身很简单，问题在于上面这个 $\le$:

如果题目给的不等式改为 $|x_{n+1}-a| < k|x_n-a|$，则比较这两个极限仍然取 $\le$
