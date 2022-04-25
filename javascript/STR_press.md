## 문자열 압축

[https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript)

```jsx
s	                       result
"aabbaccc"	                 7
"ababcdcdababcdcd"	         9
"abcabcdede"	               8
"abcabcabcabcdededededede"	14
"xababcdcdababcdcd"	        17

function solution(s) {
    let N = s.length;
    var answer = N;
    
    // 문자열 크기의 절반 수까지 i개 단위로 압축
    for (var i = 1; i <= parseInt(N/2); i++){
        let ans = "";
        let cut = 1;
        // 0부터 i개의 문자가 첫 번째 압축 문자
        var T_str = s.substr(0,i);
        // 다음에오는 문자가 같은지 확인 하기
        for (var j = i ; j <= N; j += i){
            let N_str = s.substr(j,i);
            
            if (T_str === N_str){
                cut += 1
            }else{
                if (cut === 1) {
                    ans = ans + T_str
                }else{
                    ans = ans+cut+T_str
                }
                cut = 1
                T_str = N_str
            }
        }
        if (cut === 1) {
                    ans = ans + T_str
        }else{
            ans = ans+cut+T_str
        }
				// 매 결과 값을 비교하여 작은 수 저장 하기
        answer = Math.min(answer, ans.length);
    }
    return answer;
}
```

`문제 풀이`

문제를 이해하는것에 시간을 많이 쏟은것 같다.

문제를 보다 이해가 가지 않아 검색을 통해 미리 코드를 본 상태 에서 새로 구현해 보았다.

우선 문제를 이해하기 위한 생각을 정리 해보려고 한다.

- answer 에 input 된 문자열 길이를 입력한 이유
    
    문자열의 길이중 가장 짧은 것을 찾는 문제인데 압축되는것이 없을경우는 입력된값이 작은 값이 될수 있기 때문이다.(나중에 비교를 위해서도 변경하는것이 편했다.)
    
- 많은 블로그에서 문자열 크기에 절반 수까지 압축하는 이유
    
    문자열을 압축한다 했을때 최대로 압축 할수 있는 범위가 문자열의 반 이기 때문이다.
    
    아무리 줄인다 해도 기본 반복되는 문자는 유지되며 대신 숫자 1자리가 자리를 차지하기 때문이다.
    
- `subsr`t 를 사용하는 이유
    
    우선 해당 함수가 무엇인지를 알아야 했는데
    
    ```jsx
    str.substr(start[, length])
    
    `start`
    추출하고자 하는 문자들의 시작위치. 
    만약 음수가 주어진다면, `문자열총길이 + start`의 값으로 취급 
    ex)`start`에 -3을 설정하면, 자동적으로 `문자열총길이 - 3`으로 설정
    
    `length`
    옵션값. 추출할 문자들의 총 숫자.
    ```
    
    **python이 익숙한 나에게는 문자열 슬라이싱 이라고 생각 했다.**
    
    문자열의 시작점부터 n개의 문자를 뽑아오는 기능이다.
    
    함수로 인해 나에게 필요한 문자를 변수에따라 얻을수 있었다.
    
- j 의 증가가 i 만큼 되는 이유
    
    `for (var j = i ; j <= N; j += i)`
    
    문자를 압축할때 처음정한 n개의 압축 으로만 진행 되기 때문이다.
    
    2글자로 압축했다 3글자로 압축하게되면 그만큼의 변수가 생긴다.
    
    그것을 방지하기 위해서 라도 압축방식은 통일 시키는 것이 좋다.
    
- 코드에서 아래 if문을 사용한이유
    
    ```jsx
    if (cut === 1) {
        ans = ans + T_str
    }else{
        ans = ans+cut+T_str
    }
    ```
    
    내가 정리 했던 코드에서 가져온 코드이다.
    
    cut 가 1인 경우는 중복되는 문자가 없다는 것을 뜻하고
    
    그밖에 값에는 중복이 존재하기때문에 else 를 사용한 결과값이 사용되었다.
    
- MIN 의 사용
    
    `answer = Math.min(answer, ans.length);`
    
    값을 매번 확인 하여 내가 구한 값과 그전에 결과가 나온 값을 비교 작은 값을 찾아내는 방법이였다.
    
    최댓 값을 구하는 문제라면 Max 를 사용하면 될까?
