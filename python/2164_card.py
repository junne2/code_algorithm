# n = int (input())
# dec = [i for i in range(1,n+1)]

# def split(n):
#     del dec[0]
#     dec.append(dec[0])
#     del dec[0]
    
# while len(dec) != 1:
#     split(n)
# print(dec[0])

import math
 
def solve():
  a = int(input())
  n = math.ceil(math.log2(a))
  x = 2**n - a
  print(2**n - 2 * x)
 
solve()

## or

import sys 
from collections import deque 

N = int(sys.stdin.readline()) 
queue = deque() 

for i in range(N):
	queue.append(i + 1) 

while len(queue) > 1:
	 queue.popleft() 
queue.append(queue.popleft()) 

print(queue.pop())
