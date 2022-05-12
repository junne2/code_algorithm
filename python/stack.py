#틀렸지만 기록
n = int(input())
stak = []
cut = 0

for i in range(n):
    pro = input()
    if pro == 'pop':
        if len(stak) == 0:
            print(-1)
        else:
            print(max(stak))
            stak.remove(max(stak))
        
    elif pro == 'size':
        print(len(stak))
    elif pro == 'empty':
        if len(stak) == 0:
            cut =1
            print(cut)
        else:
            cut = 0
            print(cut)
    elif pro == 'top':
        if len(stak) == 0:
            print(-1)
        else:
            print(max(stak))        
    elif int(pro.replace('push ','')) > 0:
        cut = int(pro.replace('push ',''))
        stak.append(cut)
