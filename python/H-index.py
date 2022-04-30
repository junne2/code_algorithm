def solution(citations):
    answer = 0
    citations.sort(reverse = True)
    n = len(citations)
    
    for i in range(n):
        h = citations[i]
        if h >= i+1:
            answer = i+1
    return answer
