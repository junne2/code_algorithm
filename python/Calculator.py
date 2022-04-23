A = list (input("계산식을 입력해주세요:").split())
x = int(A[0])
y = int(A[2])

if A[1] == '+':
    print(x,'+',y,' = ',x+y)
elif A[1] == '-':
    print(x,'-',y,' = ',x-y)
elif A[1] == '*':
    print(x,'*',y,' = ',x*y)
elif A[1] == '/':
    print(x,'/',y,' = ',x/y)
