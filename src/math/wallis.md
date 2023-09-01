# 点火公式

## 递归边界

$$
\begin{aligned}
\int_0^{\pi/2} \sin x dx = \int_0^{\pi/2} \cos x = 1
\end{aligned}
$$

$$
\begin{aligned}
\int_0^{\pi/2} \sin^0 x dx = \int_0^{\pi/2} \cos^0 x = \pi/2
\end{aligned}
$$

## 对称性等式

$$
\int_0^{\pi/2} \sin^n x dx = \int_0^{\pi/2} \cos^n x dx
$$

## 递归

$$
\begin{aligned}
\int_0^{\pi/2} \sin^nx dx
&= -\int_0^{\pi/2} \sin^{n-1}xd\cos x\\
&= - (sin^{n-1}x\cos x \Big |_0^{\pi/2} - \int_0^{\pi/2}\cos x d(\sin^{n-1}x))\\
&= (n-1)\int_0^{\pi/2} \sin^{n-2}x\cos^2 x dx\\
&= (n-1)\int_0^{\pi/2} \sin^{n-2}x dx - (n-1)\int_0^{\pi/2} \sin^n  x dx\\
&\Downarrow\\
\int_0^{\pi/2} \sin^n x dx
&= \frac {n-1} n \int_0^{\pi/2} \sin^{n-2}x dx
\end{aligned}
$$

## 递推式

$$
\int_0^{\pi/2}\sin ^{2n} xdx = \frac {2n - 1} {2n} \frac {2n - 3} {2n-2} ... \frac 1 2 \frac {\pi} 2\\
\int_0^{\pi/2}\sin ^{2n+1} xdx = \frac {2n} {2n+1} \frac {2n - 2} {2n-1} ... \frac 2 3 1
$$

## 变体

$$
\int_0^{\pi} \sin^nxdx =
\int_0^{\pi/2} \sin^nxdx +
\int_{\pi/2}^{\pi} \sin^nxdx
$$
