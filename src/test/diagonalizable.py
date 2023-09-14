from sympy import *

init_printing(num_columns=100)

l = 0
r = 10

for i1 in range(l, r):
    for i2 in range(l, r):
        for i3 in range(l, r):
            for i4 in range(l, r):
                
                m = Matrix([[i1, i2], [i3, i4]])
                # print([[i1, i2], [i3, i4]])
                if (m*m.transpose()).eigenvals() != (m.transpose()*m).eigenvals():
                    pprint(m)
