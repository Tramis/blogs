from sympy import *
import sympy
init_printing(num_columns=100)

origin_m = Matrix([[1, 1, 1], [1, 0, 1], [1, 1, 0]])
pprint(origin_m)

sq2 = sympy.sqrt(2)
a,b, c = symbols('a b c')



x = Matrix([a, b, c])


m = Matrix([[0, -sq2, sq2], [-1, 1, 1], [1, 1, 1]])
p = m.orthogonalize(*m.columnspace(), normalize = True)

p=Matrix(list(map(lambda x: Matrix.transpose(x), p))).transpose()

pprint(p)
pprint(p.inv())
pprint(p.transpose())
pprint(m)

diagonal_m = p.inv() * origin_m * p

diagonal_m = diagonal_m.applyfunc(simplify)

pprint(diagonal_m)

x1 = p * x

tmp = x1.transpose() * diagonal_m * x1
tmp = tmp.applyfunc(simplify)

pprint(tmp)
pprint(sympify(tmp))

print("x: ")
pprint(x1.applyfunc(simplify))

expr = - (b-c)**2 / 2 + (1-sq2)*(-sq2*a+b+c)**2 / 4 + (1+sq2)*(sq2 * a+ b + c)**2 / 4
s_expr=expr.expand()
pprint(s_expr)