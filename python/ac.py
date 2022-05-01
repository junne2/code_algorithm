from collections import deque
import sys

t = int(sys.stdin.readline())
    

for i in range(t):

    case = sys.stdin.readline().rstrip()
    ps = list(case)
    xn = int(sys.stdin.readline())
    X = deque(sys.stdin.readline()[1:-2].split(','))
    case = case.replace('RR','') 
    a = 0

    for j in case:
        if j == 'R':
            X.reverse()
        else:
            if len(X) == 0  or xn == 0:
                a = 1
                break
            else: 
                X.popleft()

    if a == 1:
        print('error')
    else:
        print("[",end="")
        for i in range(len(X)):
            print(X[i],end="")
            if i != len(X)-1:
                print(",",end="")
        print("]")
