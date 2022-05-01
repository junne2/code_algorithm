# n = int(input())
# Q = []
# cut = 0

# for i in range(n):
#     pro = input()
#     if pro == 'pop':
#         if len(Q) == 0:
#             print(-1)
#         else:
#             print(Q[0])
#             del Q[0]
        
#     elif pro == 'size':
#         print(len(Q))
#     elif pro == 'empty':
#         if len(Q) == 0:
#             print(1)
#         else:
#             print(0)
#     elif pro == 'front':
#         if len(Q) == 0:
#             print(-1)
#         else:
#             print(Q[0])
#     elif pro == 'back':
#         if len(Q) == 0:
#             print(-1)
#         else:
#             print(Q[-1])
#     elif int(pro.replace('push ','')) > 0:
#         cut = int(pro.replace('push ',''))
#         Q.append(cut)

import sys
from collections import deque
n = int(sys.stdin.readline())
q = deque([])
for i in range(n):
    s = sys.stdin.readline().split()
    if s[0] == 'push':
        q.append(s[1])
    elif s[0] == 'pop':
        if not q:
            print(-1)
        else:
            print(q.popleft())
    elif s[0] == 'size':
        print(len(q))
    elif s[0] == 'empty':
        if not q:
            print(1)
        else:
            print(0)
    elif s[0] == 'front':
        if not q:
            print(-1)
        else:
            print(q[0])
    elif s[0] == 'back':
        if not q:
            print(-1)
        else:
            print(q[-1])
