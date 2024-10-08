# series

学习一些级数相关的概念和技巧

级数的学习从初中高中的数列题目就开始了，然而直到大学才真正接触无穷与极限

从一些数列的例子，到各种审敛法，再到收敛半径，最后仔细体会一致收敛等等细微的概念（也可能不关注）

## 常数项级数

$$\Sigma_{i=1}^{\infty} u_i = u_1 + u_2 + ...$$

与**函数项级数**区分

级数 $\Sigma u_n$ 与部分和数列 $\{S_n\}$ 互相定义，且同时收敛发散

## 收敛级数的基本性质

- 若 $\Sigma u_n$ 收敛于 $s$，则 $\Sigma ku_n$ 收敛于 $ks$
- 若 $\Sigma u_n$ 收敛于 $s$，$\Sigma v_n$ 收敛于 $\sigma$，则 $\Sigma u_n+v_n$ 收敛于 $s+\sigma$
- 收敛级数改变有限项不变

第三条可以由第二条推出来

- 收敛级数任意加括号的级数仍然收敛

因为新产生的级数的部分和数列是原来的部分和数列的子列，而收敛数列的子列有相同的极限

- 收敛级数的一般项必趋于 $0$。（不充分，反例是调和级数）

## 柯西审敛

对部分和数列引用数列的柯西收敛准则

## 正项级数

- 正项级数收敛的充要条件：部分和数列有界

显然，单调有界必收敛

- 比较审敛法

通过与另一个级数 $\Sigma v_n$ 比较**各项**来证明收敛性。$v_n$ 通常通过放缩等手段来自己构造

- 比较审敛法的推论，讨论对象为极限情况下的最后一项，对比 $u_n$ 与 $v_n$ 在极限情况下的比值 $k = u_n / v_n$
  - 首先，如果 $v_n$ 收敛、
    - $k$ 存在，那么 $u_n$ 也收敛
    - $k$ 不存在，$v_n$ 收敛，那么收敛性不一定（$\Sigma \frac 1 n$ 和 $\Sigma \frac 1 {n^2}$，以及 $\Sigma \frac 1 {n^2}$ 和 $\Sigma \frac 1 {n^3}$）
  - 然后如果 $v_n$ 发散
    - $k>0$ 或者不存在，那 $u_n$ 一定发散
    - $k = 0$，那么收敛性不一定（$\Sigma \frac 1 n$ 和 $\Sigma \frac 1 {\sqrt{n}}$）

- 比值审敛法

这个和根值审敛法原理很像

- 根值审敛法（柯西判别法）

$$\lim_{\infty} \sqrt[n]{u_n} = \rho$$

那么 $\rho<1$ 时收敛，$\rho >1 $ 时发散，$\rho =1$ 时不一定

这个方法实际上是在拿 $u_n$ 和 $\rho^n$ 比较

## 交错级数

通过加括号，单调递减有上界

## 绝对收敛条件收敛

- 绝对收敛比条件收敛更强

- 绝对收敛级数可以随意重排

- 绝对收敛级数的柯西乘积也绝对收敛

## 幂级数

- 收敛点
- 发散点
- 收敛域
- 发散域

这些是函数项级数的概念，不局限于幂级数

幂级数在其收敛半径上收敛，其<u>**和函数**</u>记为 $s(x)$

## 阿贝尔定理

> 同济书上的阿贝尔定理和 wiki 上的阿贝尔定理不一样

如果幂级数 $\Sigma a_n x^n$ 在 $x_0$ 处收敛，则将其看作一个常数项级数

$$
\Sigma b_n, b_n = a_nx^n
$$

阿贝尔定理说明了收敛的常数项级数 $\Sigma b_n$ 必有至少 $1$ 的收敛半径

这实际上还挺显然的，因为由于 $\Sigma b_n$ 收敛，故它的项有界，因而 $|\Sigma b_n|$ 有上界，记为 $M$

把幂级数看作一个带了系数的等比数列，$\Sigma Mq^n$ 在 $q\in [0, 1)$ 时当然是收敛的

由正项级数比较 $|b_n q^n| \le |M q^n|$，知 $\Sigma |b_n q^n|$ 收敛

所以 $\Sigma b_n q^n$ 绝对收敛

> 注意此定理的反面情况也是开区间，反例例如调和级数和[交错调和级数](#交错调和级数)

## 收敛半径

如果幂级数 $\Sigma a_n$ 不是仅在 $x_0=0$ 处收敛，也不在 $\R$ 上收敛，则收敛半径 $r$ 存在

> 感觉存在性可以二分证明，因为级数在某一点要么收敛要么发散

## 求收敛半径

$$
\lim |\frac {a_{n+1}} {a_n}| = \rho
$$

则收敛半径 $r$ 为

$$
r = \begin{cases}
\frac 1 \rho, &\rho \ne 0\\
+ \infty, &\rho = 0\\
0, &\rho \to \infty
\end{cases}
$$

这个定理与上面的阿贝尔定理原理是一致的，都是给出了等比数列的一个上界

## 幂级数在其收敛域上绝对收敛

可能能用于幂级数之间的加与乘，应该能用于更细致的分析，但我估计考研不考

## 幂级数的和函数性质

- 在收敛域 $I$ 上连续
- 在收敛域 $I$ 上可积，且可逐项积分
- 在收敛域 $I$ 上可导，且逐项可导，得到的新幂级数有着与原函数相同的收敛半径
  - 推论：幂级数的和函数在收敛区间内有任意阶导数

## 函数的幂级数展开

泰勒...

## 一致收敛

考察一般函数项级数的连续，逐项积分和逐项求导的条件

上面指出幂级数连续且能逐项积分和求导，但对一般函数项级数不一定成立，例如：

$$
f(x) = x + (x^2 - x) + (x^3 - x^2) + ...
$$

可知 $[0, 1)$ 上 $f(x) = 0$，但 $f(1) = 1$

级数在 $[0, 1]$ 这一整段上都是收敛的，但在 $x=1$ 这一点上却是不连续的

问：什么样的级数，能够继承其每一项的连续性（即若每一项都连续，则级数也连续），

## 傅里叶级数



## 例子引用

### 交错调和级数

$$
1 - \frac 1 2 + \frac 1 3 - \frac 1 4 + \frac 1 5 - ...
$$
