import sys

n = int(sys.stdin.readline())
A = set(map(int,sys.stdin.readline().split()))

m= int(sys.stdin.readline())
su = list(map(int,sys.stdin.readline().split()))

for i in range(n):
    if su[i] in A:
        print(1)
    else: print(0)
