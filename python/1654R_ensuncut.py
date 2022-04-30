import sys

n ,k = map(int,sys.stdin.readline().split())
nk =[]

for _ in range(n):
    nk.append(int(sys.stdin.readline()))

sun = sum(nk)//k
str = 1

while True:
    mid = (sun + str) // 2
    count = 0

    for i in nk:
        count += i // mid

    if count >= k:
        str = mid + 1
    elif count < k:
        sun = mid - 1
    if str == sun:
        break

print(sun)
