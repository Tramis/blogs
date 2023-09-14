# DE

$$
F(x, \phi(x), \phi'(x), \phi''(x) , ..., \phi^{(n)}(x)) \equiv 0
$$

> 最高几阶导，称为微分方程的阶
>
> 考核范围仅限[线性微分方程](#概念线性微分方程)
>
> [微分算子复习](https://zhuanlan.zhihu.com/p/646413837)

考研范围大概只用掌握以下几类微分方程

- [DE](#de)
  - [一阶线性](#一阶线性)
    - [可分离变量](#可分离变量)
    - [一阶齐次](#一阶齐次)
    - [可化为齐次](#可化为齐次)
    - [【概念】线性微分方程](#概念线性微分方程)
      - [例：一阶非线性微分方程](#例一阶非线性微分方程)
  - [特例](#特例)
    - [欧拉方程](#欧拉方程)
      - [1. 观察可知 $y=x^r$ 是一个特解](#1-观察可知-yxr-是一个特解)
      - [2. 另一种解法是通过换元 $x=e^t$](#2-另一种解法是通过换元-xet)
    - [伯努利方程](#伯努利方程)
    - [可降阶的高阶微分方程](#可降阶的高阶微分方程)
      - [1. $y^{(n)}=f(x)$](#1-ynfx)
      - [2. $y'' = f(x, y')$](#2-y--fx-y)
      - [3. $y''=f(y, y')$](#3-yfy-y)
  - [特定二阶非齐次常系数线性](#特定二阶非齐次常系数线性)
    - [二阶常系数齐次](#二阶常系数齐次)
    - [二阶常系数非齐次](#二阶常系数非齐次)
    - [$n$ 阶常系数齐次](#n-阶常系数齐次)

## 一阶线性

### 可分离变量

$$P(x)dx = P(y)dy$$

解法是显然的

### 一阶齐次

$$
\frac {dy} {dx} = \phi (\frac y x)
$$

### 可化为齐次

$$
\frac {dy} {dx} = \frac {ax+by+c} {a_1x+b_1y+c_1}
$$

通过换元 $x'=x+A, y'=y+B$ 来将其转化为齐次

$$
\frac {ax+by+c} {a_1x+b_1y+c_1} = \frac {ax' + by' + (c-aA - bB)} {a_1x' + b_1y' + (c_1-a_1A - b_1B)}
$$

因此只需通过

$$
\begin{cases}
  &c-aA - bB = 0\\
  &c_1-a_1A - b_1B = 0
\end{cases}
$$

来唯一确定 $A, B$

这个二元方程有四种情况，唯一解，一维任意解，二维任意解，无解

1. 唯一解对应 $A, B$ 系数矩阵可逆，解空间为整个平面
2. 一维任意解对应系数矩阵不可逆，但非零矩阵，同时 $\frac c {c_1} = \frac a {a_1}$，$(c, c_1)$ 在一维的解空间中
3. 二维任意解对应系数矩阵为零矩阵，同时 $c_1 = c = 0$，解空间为零点
4. 无解是除以上以外的任意情况，$(c, c_1)$ 不在 $(a, a_1)$ 和 $(b, b_1)$ 张成的向量空间中

只有 1. 需要换元，2. 的微分方程右侧为常数，3. 不可能出现（分母为 0），4. 可以分类讨论以下

1. 系数矩阵秩为 $0$，此时微分方程右侧为常数，或者 $c_1=0$ 时不可能
2. 系数矩阵秩为 $1$，此时微分方程右侧可以化为 $\frac {a} {a_1} + \frac {d} {a_1x + b_1y + c_1}$

具体例子来说

$$
\frac {dy} {dx} = 1 + \frac {1} {x+y+1}
$$

此时设 $u=x+y+1$，则 $dy/dx = d(u-x-1)/dx = du/dx - 1$

于是转化为可分离变量的一阶线性微分方程

$$
\frac {du} {dx} = 2+\frac 1 u
$$

### 【概念】线性微分方程

$$
a_0(x)y+a_1(x)y'+a_2(x)y'' + ... + a_n(x)y^{(n)} = b(x)
$$

【同济】形如以下形式的方程称为一阶线性微分方程

$$\frac {dy} {dx} + P(x)y = Q(x)$$

#### 例：一阶非线性微分方程

$$
e^{y} + y' = 0
$$

## 特例

### 欧拉方程

柯西-尤拉方程是形式如

$$
x^{2}y''+bxy'+cy=0
$$
（其中 $b,c$ 是常數）的二階變係數常微分方程。

#### 1. 观察可知 $y=x^r$ 是一个特解

$$
\begin{aligned}
  &\frac {dy} {dx} = rx^{r-1}\\
  &\frac {d^2y} {dx^2} = r(r-1)x^{r-2}
\end{aligned}
$$

于是方程转化为
$$
(r(r-1) + br + c)y = 0
$$

[wiki](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Euler_equation) 对于这个二次方程的三个解做了分别讨论

1. 两个不同解时通解为 $y=c_1x^{m_1} + c_2x^{m_2}$
2. 两个相同解时通解为 $y=c_1x^m\ln(x) + c_2x^m$
3. 比较复杂，懒得写了，总之是复数

#### 2. 另一种解法是通过换元 $x=e^t$

> 为什么这里好像假设了 $x>0$
> 哦，$t$ 可以是复数，那没事了

[微分算子复习](https://zhuanlan.zhihu.com/p/646413837)

$D \to \frac d {dt}$

$Dy = xy', D(D-1)y=x^2y''$

原方程转化为 $(D^2 - D + bD + c)y = 0$

于是变成 $y$ 对 $t$ 的二阶齐次线性微分方程

### 伯努利方程

$$\frac {dy} {dx} + P(x)y = Q(x)y^n$$

### 可降阶的高阶微分方程

#### 1. $y^{(n)}=f(x)$

积 $n$ 次即可

#### 2. $y'' = f(x, y')$

设 $y'=p$，即有 $\frac {dp} {dx} = f(x, p)$

> TODO: $y'=e^{xy}$ 似乎也有这种形式，常数变易法能做吗

#### 3. $y''=f(y, y')$

设 $y'=p$，则有

$$
\begin{aligned}
\frac {dp} {dx}
&= f(y, p)\\
&=\frac {dp} {dy} \frac {dy} {dx}\\
&=\frac {dp} {dy} p
\end{aligned}
$$

转换为 $\frac {dp} {dy} = \frac 1 p f(y, p)$

## 特定二阶非齐次常系数线性

### 二阶常系数齐次

### 二阶常系数非齐次

$$
a_1f''(x) + a_2f'(x) + a_3 f(x) = e^{cx}(b_1x^3 + b_2x^2 + b_3 x + b_4)
$$

写为矩阵乘法：

$$
\begin{pmatrix}
a_1 & a_2 & a_3
\end{pmatrix}
\begin{pmatrix}
f''(x)\\
f'(x)\\
f(x)
\end{pmatrix}
=e^{cx}
\begin{pmatrix}
b_1 & b_2 & b_3 & b_4
\end{pmatrix}
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
$$

设特解为

$$
g(x) = e^x(p_1 x^3 + p_2 x^2 + p_3 x  + p_4) = e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
$$

则 $dg(x)/dx$ 可求为

$$
\begin{aligned}
g'(x)
&= ce^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
+
e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\begin{pmatrix}
0&3&0&0\\
0&0&2&0\\
0&0&0&1\\
0&0&0&0\\
\end{pmatrix}
\begin{pmatrix}
x^3\\
x^2\\
x\\
x
\end{pmatrix}\\
&=e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\big[
c+ \begin{pmatrix}
0&3&0&0\\
0&0&2&0\\
0&0&0&1\\
0&0&0&0\\
\end{pmatrix}
\big]
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
\end{aligned}
$$

递归可得

$$
\begin{aligned}
g''(x)
&=e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\big\{
c \big[
c+ \begin{pmatrix}
0&3&0&0\\
0&0&2&0\\
0&0&0&1\\
0&0&0&0\\
\end{pmatrix}
\big]+ \begin{pmatrix}
0&3&0&0\\
0&0&2&0\\
0&0&0&1\\
0&0&0&0\\
\end{pmatrix}
\big\}
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
\end{aligned}
$$

我草，写起来好麻烦，记

$$
A = \begin{pmatrix}
0&3&0&0\\
0&0&2&0\\
0&0&0&1\\
0&0&0&0\\
\end{pmatrix}
$$

于是上面都简化为：

$$
\begin{aligned}
&g(x) =e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}\\
&g(x) =e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
(c + A)
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}\\
&g''(x) =e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
(c (c+ A)+ A)
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
\end{aligned}
$$

于是

$$
\begin{pmatrix}
a_1 & a_2 & a_3
\end{pmatrix}
\begin{pmatrix}
g''(x)\\
g'(x)\\
g(x)
\end{pmatrix} =
e^{cx}
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\begin{pmatrix}
a_1 & a_2 & a_3
\end{pmatrix}
\begin{pmatrix}
c(c+A)+A\\
c+A\\
1
\end{pmatrix}
\begin{pmatrix}
x^3\\
x^2\\
x\\
1
\end{pmatrix}
$$

故

$$
\begin{pmatrix}
p_1 & p_2 & p_3 & p_4
\end{pmatrix}
\begin{pmatrix}
a_1 & a_2 & a_3
\end{pmatrix}
\begin{pmatrix}
c(c+A)+A\\
c+A\\
1
\end{pmatrix} =
\begin{pmatrix}
b_1 & b_2 & b_3 & b_4
\end{pmatrix}
$$

### $n$ 阶常系数齐次
