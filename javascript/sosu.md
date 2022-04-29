입력받은 배열에서 요소 3개를 더해서 소수인경우의 갯수를 파악하는 방법으로
수소인지를 파악해야 하기때문에 내부에 소수 함수를 추가 하였고
중첩 포문을 사용해 3개의 숫자를 더했다.


소수 만들기

[https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript)

```jsx
function solution(nums) {
    var answer = 0;
    let N = nums.length 
    
    //소수를 확인하는 함수
    function sosu(num) {
        for (var i = 2; i< num; i++){
            if (num % i === 0){
                return false
            }
        }
        return true
    }
    // 3개의 요소를 더한다.
    for (let x = 0; x < N; x++){
        // x를 포함하지 않기 위해 +1을 해주었다. z도 동일한 사항이다.
        for (let y = x+1; y < N; y++){
            for (let z = y+1; z < N; z++){
                let num = nums[x] + nums[y] + nums[z]
                // 소수가 맞는경우를 더해주었다.
                if (sosu(num) === true){ 
                    answer += 1;
                }                
            }
        }
        
    }
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}
```
