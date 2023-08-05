# DE

$$
F(x, \phi(x), \phi'(x), \phi''(x) , ..., \phi^{(n)}(x)) \equiv 0
$$

考研范围大概只用掌握以下几类微分方程

- 一阶线性
  - 可分离变量
  - 齐次
  - 非齐次
- 特定二阶非齐次常系数线性
  - $ay''+by'+cy=e^xQ(x)$
  - $ay''+by'+cy=Q_1(x)\sin \beta x + Q_2(x) \cos \beta x$

## 可分离变量

$$P(x)dx = P(y)dy$$

解法是显然的

## 一阶齐次

$$
\frac {dy} {dx} = \phi (\frac y x)
$$

### 可化为齐次

$$
\frac {dy} {dx} = \frac {ax+by+c} {a_1x+b_1y+c_1}
$$

## 线性微分方程

$$
a_0(x)y+a_1(x)y'+a_2(x)y'' + ... + a_n(x)y^{(n)} = b(x)
$$

【同济】形如以下形式的方程称为一阶线性微分方程

$$\frac {dy} {dx} + P(x)y = Q(x)$$

## 伯努利方程

$$\frac {dy} {dx} + P(x)y = Q(x)y^n$$

## 可降阶的高阶微分方程

### $$1. y^{(n)}=f(x)$$

积 $n$ 次即可

### $$2. y'' = f(x, y')$$

设 $y'=p$，即有 $\frac {dp} {dx} = f(x, p)$

> TODO: $y'=e^{xy}$ 似乎也有这种形式，常数变易法能做吗

### $$3. y''=f(y, y')$$

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

## 二阶常系数非齐次

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
