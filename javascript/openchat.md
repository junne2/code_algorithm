오픈채팅 관련 문제이다.
유저가 나가고 들어오는 것을  출력하는것인데
나갔다 들어왔을때 닉네임을 변경하는 변수가 있다.

완전 탐색 문제로 map 을 사용하였는데
map 사용법을 익혀야 한다.

```jsx

function solution(record) {
    var answer = [];
    const map = new Map();
    
    for (let i in record){
        // 각각의 요소들을 나누어 저장한 방법이다.
        const [com, id, name] = record[i].split(' ');
        
        // 아이디와 문장을 따로 저장 하는 이유는 name으로 변경 해야 하기 때문이다.
        if (com === "Leave"){
            answer.push([id,"님이 나갔습니다."])
            continue
        }
        if (com === "Enter"){
            answer.push([id,"님이 들어왔습니다."])   
        }
        
        map.set(id, name);
    }
    
    // 아이디와 문장을 결합해서 출력하는 방법
    return answer.map(ele => map.get(ele[0]) + ele[1]);
}
```
