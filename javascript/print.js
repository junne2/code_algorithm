// priorities	       location	   return
// [2, 1, 3, 2]	         2	     1 
// [1, 1, 9, 1, 1, 1]	   0	     5

function solution(priorities, location) {
    var answer = 1;
    let cnt = 0
    let max = Math.max(...priorities)
    
// priorities dml 길이가 0이 될때 까지 반복
    while (priorities.length) {
				// 만약 바로 제일큰 수 이면서 목표이면 출력
        if (priorities[cnt] === max){
            if(location === 0){
                return answer;
            }
					//아닌경우 priorities에서 앞에 요소를 빼고 answer 을 추가 max를 새로 지정한다.
            priorities.shift();
            answer += 1;
            max = Math.max(...priorities)
        
				// 맥스보다 작은 수들일경우 뒤로 보낸다    
        }else{
            priorities.push(priorities.shift());
        }
				// 만약 목표로 했던수가 지금단계기 아니라면 위치가 힌자리씩 뻬준다.
        if (location !== 0){
            location-= 1;
        // 0인경우 에는 목표수가 뒤로 이동 했기 때문에 목표수의 위치를 재 설정한다.
				}else{
            location = priorities.length-1;
        }
    }
    
    return answer;
}
