# SoftMax Regression

说是回归，实为分类

同样是根据一组输入，得到若干结果中最可能的一个

softmax 字面意思似乎是 “软性” 地选择最大值

## SoftMax Function

$x\in \R^n$，`softmax` 函数将这个向量映射为一组概率值，并保持其之间的序关系

$$
\text{soft}(x) = \begin{pmatrix}
    \exp(x_1)/\Sigma \exp(x_i)\\
    \exp(x_2)/\Sigma \exp(x_i)\\
    ..\\
    \exp(x_n)/\Sigma \exp(x_j)\\
\end{pmatrix}
$$

## Likely-Hood

样本 $X, Y$，对样本进行估计 $\hat{Y} = WX + b$，现在想要获得一个损失函数以优化参数

首先对 $Y, \hat Y$ 进行 softmax 得到 $O, \hat O$

由于 $Y$ 是已知样本，所以我的估计中只有一项是正确的，对一项样本 $x_1$ 我得到一串概率 $\hat o_1$ 中只有一项 $\hat o_{1i_1}$ 是有用的概率

那么我的估计是正确的概率就是对所有样本得到的概率的连乘

$P(Y|X) = \hat o_{1i_1} * \hat o_{2i_2} * .. \hat o_{ni_n}$

这样写着太麻烦，由于实际的样本 $Y$ 是一列列 One-Hot 向量， $o_1$ 中只有一项为 1，其余为 0，于是 $\hat o_{1i_1}$ 实际上可以写为

$$
\hat o_{1i_1} = \Sigma o_{1i}\hat o_{1i} = o_1 \cdot\hat o_1
$$

对上述概率取负对数

$$
-\log P = -\Sigma \log o_{ji_1}
$$

同样的道理，出于 One-Hot 向量的性质 (这里对向量取 log 表示对其每一项取 log)

$$
\log o_{ji_1} = \Sigma o_{ji}\log \hat o_{ji} = o_j \cdot\log \hat o_j
$$

所以重写概率 $P$

$$
-\log P = - \Sigma o_j \cdot \log \hat o_j
$$

在 softmax regression 中，其每一项定义为 loss 函数

$$
l(y_i, \hat y_i) = - \Sigma o_i \cdot \log \hat o_i
$$