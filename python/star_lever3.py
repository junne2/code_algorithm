a = [2,2,3,3,1,2,1,3]
ans = []
max = 3
for j in range(3,0,-1):
    for i in range(len(a)):
        ans.append(j-a[i])
for x in range(1,len(ans)+1):
    if x % 8 == 0:
        print('*',end='\n')
    elif ans[x-1] <= 0: 
        print('*', end="")
    else:
        print(' ', end="")
