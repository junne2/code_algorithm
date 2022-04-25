## 짝지어 제거하기

[https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript)

최종 코드

```jsx
function solution(s){
    var answer = []
    for (var i = 0; i<s.length; i++){
        if (answer.length === 0 || s[i] !== answer[answer.length-1]){
            answer.push(s[i])
        }else{
            answer.pop()
        }
    }
    answer= answer.length === 0 ?1:0
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

```

중간 과정 코드

```jsx
s	      result
baabaa	1
cdcd	  0

function solution(s){
//리스트 만들기
    var answer = []
    for (var x of s){
        answer.push(x)
    }
		// 같은경우 제거하기
    for (var i = 0; i<s.length/2; i++){
        for (var j = 0; j<answer.length; j++){
            if (answer[j] === answer[j+1]){
                answer.splice(j,2)
            }
        }            
    }
    answer =  answer.length === 0 ? 1:0
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}
3.4.5.6.7.8틀림
```

일단 간단하게 생각 해보자 하고

리스트로 정리해보면 어떨까? 라는 생각으로 진행해 보았다.

우선 s 를 리스트 안에 넣고 

같은 경우를 슬라이싱 으로 제거 하였는데 반복을 어떻게 사용할 것 인가에 대한 의문으로 문제를 풀었더니 실패라는 결과가 나왔다.

반복하는 횟수가 맞지 않아 일부 식에서 틀리는 현상이 벌어졌다.

이후 구상중에 stack 은 어떨까? 하는 생각을 하게 되었다.

결과는 성공  풀이를 짚어보자면  s문자열의 길이만큼 반복하여 answer 이라는 배열에 한 문자씩 추가를 해 준다.

ex) 1번 문제의 경우 baabaa 의 문자열에서

 | i | s[i] | answer | answer[-1] | push | pop | 내용 |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | b | [] | - | b |  | 빈배열에 b 를 추가 |
| 1 | a | [b] | b | a |  | a ≠ b 이므로 a 를 추가 |
| 2 | a | [b, a] | a |  | a | a = a 이므로 a 를 추가하지 않고 제거 |
| 3 | b | [b] | b |  | b | b = b 이므로 a 를 추가하지 않고 제거 |
| 4 | a | [] | - | a |  | 빈배열에 a 를 추가 |
| 5 | a | [a] | a |  | a | a = a 이므로 a 를 추가하지 않고 제거 |

하여 결국 answer에 남는 요소는 없게 된다.

그러므로 남은 값이 없어 1을 출력한것이다.
