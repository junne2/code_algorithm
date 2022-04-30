from collections import deque
import sys

input = sys.stdin.readline
de = deque()
n = int(input())

for i in range(n):
    A = input().rstrip()

    if A.isalpha() == False:
        if A.find('f') == 5:
            cut = int(A.replace('push_front ',''))
            de.appendleft(cut)
        elif A.find('b') == 5:
            cut = int(A.replace('push_back ',''))
            de.append(cut)
        elif A == 'pop_front':
            if len(de) > 0:
                print(de.popleft())
            else:
                print(-1)
        elif A == 'pop_back':
            if len(de) > 0:
                print(de.pop())
            else:
                print(-1)
    else:
        if A == 'size': print(len(de))
        elif A == 'empty':
            if not de: print(1)
            else: print(0)
        elif A == 'front':
            if not de: print(-1)
            else: print(de[0])
        elif A == 'back':
            if not de: print(-1)
            else: print(de[-1])
