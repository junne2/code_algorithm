import sys 
from collections import deque 

N, K = map(int,sys.stdin.readline().split())
K = K-1
tep = []
deq = deque([i for i in range(1, N+1)])

while len(deq) > 1:
    deq.rotate(-K)
    tep.append(deq.popleft())

tep.append(deq.pop())

print('<' ,end='') 
for i in range(len(tep)):
    if i != len(tep) - 1:
        print("%d, " %tep[i], end='') 
        
    else:
        print("%d>" %tep[i])
     
# 출력방식 확인
