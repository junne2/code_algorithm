t = int(input())

for i in range(t):
    a =list(str(input()))
    b = []
    to = int(len(a))

    for j in range(to):
        if a[0] == ')':
            print('NO')
            break

        if a.count('(') == a.count(')'):
            if j + 1 == len(a):
                if a[j] == '(':
                    print('NO')
                else:
                    b.pop()
                    if len(b) == 0:
                        print('YES')
                    else:
                        print('NO') 
            elif a[j] == '(':
                b.append(a[j])
            elif a[j] == ')':
                if len(b) > 0:
                    b.pop()
                elif len(b) == 0:
                    print('NO')
                    break
        
        else:
            print('NO')
            break
