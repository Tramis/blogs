# 推广的积分中值定理 [偷自 wiki](https://en.wikipedia.org/wiki/Mean_value_theorem#Mean_value_theorems_for_definite_integrals)

$f(x)$ 在 $[a, b]$ 上连续，$g(x)$ 在其上非负，则

$$
\int_a^bf(x)g(x)dx = f(\xi) \int_a^b g(x)dx
$$

## 思路

$f(x)$ 把 $[a, b]$ 连续地映射到 $[m, M]$ 上

## 证

可知 $m \le f(x) \le M$，于是 $m\int_a^b g(x)dx \le \int_a^b f(x)g(x)dx \le M\int_a^b g(x)dx$

由介值性知存在 $\xi \in [a, b]$ 满足

$$
f(\xi) = \frac {\int_a^b f(x)g(x)dx} {\int_a^b g(x)dx}
$$

于是

$$
f(\xi) \int_a^b g(x)dx = \int_a^b f(x)g(x)dx
$$

得证

$$
f'(x) = \frac 1 {}
$$
