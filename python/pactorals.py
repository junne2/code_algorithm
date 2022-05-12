from math import factorial

n = int(input())
cut = 0

fa = list(reversed(str(factorial(n))))


for i in fa:
    if  int(i) > 0:
        break
    else:
        cut += 1

print(cut)
