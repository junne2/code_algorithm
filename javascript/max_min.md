## 최댓값과 최솟값

[https://programmers.co.kr/learn/courses/30/lessons/12939](https://programmers.co.kr/learn/courses/30/lessons/12939)

```javascript
s	             return
"1 2 3 4"	     "1 4"
"-1 -2 -3 -4"  "-4 -1"
"-1 -1"	       "-1 -1"

function solution(s) {
    var answer = '';
    var A = s.split(" ")
    var N = A.length
    A.sort(function(a,b){
        return a - b
    })
    var a = A[0]
    var b = A[N-1]
    answer = a+' '+b
    return answer;
}
```

문제 풀이

최솟값과  최댓값을 구하는 문제이다.

정렬해서 첫값과  끝값을 뽑으면 될것 같아서 일단 sort로 정렬을 했고

length 를 이용하여 끝 자리를 확인 하였다.
