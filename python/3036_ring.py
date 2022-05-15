def gcd(a, b):
    while(b != 0):
        n = a%b
        a = b
        b = n
    return a

n = int(input())
li = list(map(int, input().split()))
for i in range(1, n):
    g = gcd(li[0], li[i])
    a = (li[0]//g)
    b = (li[i]//g)
    print(f'{a}/{b}')
