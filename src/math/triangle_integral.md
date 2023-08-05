# 三角函数分式积分

## $$\int \frac {dx} {\sin x}$$

$$
\begin{aligned}
&=\int \frac {-d\cos x} {1 - \cos^2 x}\\
&=- \int \frac 1 2 (\frac 1 {1+\cos x } +  \frac 1 {1-\cos x })d\cos x\\
&=-\frac 1 2 \ln \big| \frac {1+\cos x } {1- \cos x} \big| + C\\
&=-\ln \big| \frac {1+\cos x} {\sin x}\big| + C
\end{aligned}
$$

## $$\int \frac {dx} {\sin^2 x}$$

$$
\begin{aligned}
&=\int \frac {d\tan x} {\tan^2x}\\
&= -\frac 1 {\tan x} +C
\end{aligned}
$$

## $$\int \frac {dx} {\sin^3 x}$$

有理分式裂项是可以做的

$$
\begin{aligned}
&=\int \frac {-d\cos x} {\sin^4 x}\\
&=-\int \frac {d\cos x} {(1-\cos^2 x)^2}\\
&=-\int \big(\frac {A} {(t-1)^2} + \frac B {t-1} + \frac C {(t+1)^2} + \frac D {t+1}\big)dx\\
&=-\int \big(\frac {1/4} {(t-1)^2} + \frac {-1/4} {t-1} + \frac {1/4} {(t+1)^2} + \frac {1/4} {t+1}\big)dx\\
&=-\frac 1 4 \big( - \frac 1 {t-1} - \ln \big|t-1\big| -\frac 1 {t+1} + \ln \big| t+1 \big| \big) + C\\
&=-\frac 1 4 \big( - \frac {2t} {t^2 - 1} + \ln \big| \frac {t+1}{t-1}\big|) + C\\
&=-\frac 1 4 \big(  \frac {2\cos x} {\sin^2x} + \ln \big| \frac {\cos x+1}{\cos x-1}\big|) + C\\
\end{aligned}
$$

或者可以采用分部积分

$$
\begin{aligned}
&=\int \frac {-1} {\sin x}d\frac {\cos x} {\sin x}\\
&=-\frac {\cos x} {\sin^2 x} + C - \int  \frac {\cos x} {\sin x} d\frac {-1} {\sin x}\\
&=-\frac {\cos x} {\sin^2 x} + C - \int  \frac {\cos^2 x} {\sin^3 x} dx \\
&=-\frac {\cos x} {\sin^2 x} + C - \int  \frac {1 - \sin^2 x} {\sin^3 x} dx \\
&=-\frac {\cos x} {\sin^2 x} + C - \int  \frac 1 {\sin^3 x} dx + \int  \frac 1 {\sin x} dx \\
&=-\frac {\cos x} {2\sin^2 x}  - \frac 1 2 \ln \big| \frac {1+\cos x} {\sin x}\big| + C\\
\end{aligned}
$$

## $$\int \frac 1 {\sin^4 x} dx$$

$$
\begin{aligned}
&=\int \frac {-1} {\sin^2 x}d\frac {\cos x} {\sin x}\\
&=-\frac {\cos x} {\sin^3 x} + C - \int  \frac {\cos x} {\sin x} d\frac {-1} {\sin^2 x}\\
&=-\frac {\cos x} {\sin^3 x} + C - \int  \frac {2\cos^2 x} {\sin^4 x} dx \\
&=-\frac {\cos x} {\sin^3 x} + C - 2\int  \frac {1 - \sin^2 x} {\sin^4 x} dx \\
&=-\frac {\cos x} {\sin^3 x} + C - 2\int  \frac 1 {\sin^4 x} dx + \int  \frac 2 {\sin^2 x} dx \\
&=-\frac {\cos x} {3\sin^3 x}  - \frac 2 {3\tan x} + C\\
\end{aligned}
$$

可以看到更高次项同理

## $$\int \tan^n x dx$$

$$
\begin{aligned}
&= \int \frac {\sin^{n-2}x(1-\cos^2 x)} {\cos^n x}dx\\
&= \int \tan^{n-2} x d\tan x + \int \tan^{n-2}x dx\\
&= \frac {\tan^{n-1}x} {n-1} + \int \tan^{n-2}x dx + C
\end{aligned}
$$

形成递归，边界分别为

1. $\int \tan x dx =-\ln \big| \cos x\big| + C$
2. $\int dx = x+C$

