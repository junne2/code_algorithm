import sys
import heapq

n = int(sys.stdin.readline())
hip = []

for i in range(n):
    x = int(sys.stdin.readline())
    
    if not hip and x == 0:
        print(0)
    else:
        if x > 0:
            heapq.heappush(hip,(-x))
        else:
            print(-1 * heapq.heappop(hip))
