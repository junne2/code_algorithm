import sys

n , m = map(int,sys.stdin.readline().split())
nm =list(map(int,sys.stdin.readline().split()))

start = 1
last = max(nm)

while last != start:
    mid = (start + last) //2
    H = 0
    h = 0
    for i in nm:
        h = i - mid
        if h <= 0:
            h = 0
        H += h
    if H < m:
        last -= 1
    elif H == m:
        break
    else:
        start = mid+1

print(mid)
