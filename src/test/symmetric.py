from sympy import *

init_printing(num_columns=100)

x = Matrix([1, 2, 3])

# A = Matrix([
#     [1, 2],
#     [2, 1]
#     ])

# A = Matrix([
#     [0, 1, 0],
#     [1, 1, 2],
#     [0, 2, 0]
#     ])

A = Matrix([
    [1, 1],
    [0, 1],
    ])

pprint(A.eigenvects())

# P, D = A.diagonalize(normalize=False)

# pprint(P)
# pprint(D)

# C = Matrix([
#     [0, 0, 0],
#     [0, 1, 0],
#     [0, 0, 2]
#     ])

# pprint(A.transpose() * C * A)