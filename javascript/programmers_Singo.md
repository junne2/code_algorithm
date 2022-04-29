신고 결과 받기 
블로그 정리 예정글 
간단한 문제이지만 map 사용법을 익히기 위함이다.

```javascript
[id_list	report	k	result]

["muzi", "frodo", "apeach", "neo"]	
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	
2	
[2,1,1,0]

["con", "ryan"]	
["ryan con", "ryan con", "ryan con", "ryan con"]	
3	
[0,0]

function solution(id_list, report, k) {
    // 미리 0인 배열 생성해두기
    const answer = new Array(id_list.length);
    answer.fill(0)
    
    let Re_list = {}
    // 아이디별 value가 빈 배열을 가지는 객체
    id_list.map((user)=>{
        Re_list[user] = []
    })
    
    // 중복 제거 하기
    let reSet = new Set(report)
    
    //이용 정지 당한 아이디 찾기
    for (let i of reSet){
        const [id, repo] = i.split(' ')
        Re_list[repo].push(id)
    }
    // 정지 아이디를 신고한 사람에게 카운트 주기
    for(const cnt in Re_list){
        if(Re_list[cnt].length >= k){ 
            Re_list[cnt].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}
```
