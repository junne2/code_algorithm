프로그래머스의 1단계 문제로 카카오 문제이다.
크레인으로 캐릭터 아이콘을 매치해 없애는 문제로 코딩된다.

주어진 배열에 따라 움직였을때 삭제되는 아이콘의 수를 출력하는 코드
스택을 사용한다.(후입선출)

크레인 1

[https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript](https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript)

```jsx
function solution(board, moves) {
    var answer = 0;
    const stack = [];
    
    // 가져올  아이콘의  위치 탐색 
    for (let move of moves){
        for (let i=0; i<board.length;i++){
            const icon = board[i][move-1]
            // 해당 줄에 아이콘이 없는경우는 더 내려가야 한다.
            if (icon === 0)continue;
            //아이콘이 스택에 쌓인 아이콘과 같다면 추가 하지 않고 제거
            if (icon === stack[stack.length-1]){
                stack.pop();
                answer += 2;
            }else {
                stack.push(icon);
            }
            // 가져온 아이콘의 자리는 0으로 만들어 준다.
            board[i][move -1] = 0;
            break;
        }
    }
    return answer;
}
```
