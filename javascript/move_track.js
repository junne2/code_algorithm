//bridge_length	 weight	 truck_weights	                    return 
//2	             10	     [7,4,5,6]	                        8
//100	           10      [10]	                              101
//100	           100     [10,10,10,10,10,10,10,10,10,10]	  110


function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let que = [];
    let quesum = 0;
    
// 다리의 길이를 설정하기 위해 빈배열 만드는 작업
    for(let i =0;i<bridge_length;i++){
        que.push(0);
    }
    // 첫번째과정을 미리 처리해 보았다.
		// 대기중인 트럭에서 앞에 것을 뺀다.
    let now = truck_weights.shift();
		// 뺀트럭을 다리로 보낸다.
    que.push(now)
		// 다리에 올라가있는 트럭의 무게를 확인한다
    quesum = now
		// 트럭이 들어갔음으로 빈배열을 하나 빼준다.
    que.shift()
    

// 위에 과정을 반복해주면 되기 때문에 와일문을 사용
    while (quesum) {
        // n 번째 대기 트럭을 뺀다.
        now = truck_weights.shift();
				// 다리에 빈칸을 만든다.
        var a = que.shift()
				// 해당 다리에 무게를 빼준다
        quesum -= a
        
		// 만약 현재 다리무게 + 추기될 트럭의 무게가 제한무게에 걸리지 않는다면
        if (quesum+now <= weight){
						// 다리에 대기 트럭을 넣는다.
            que.push(now)
						// 대기트럭의 무게를 더해준다
            quesum += now
            
            
        }else{
						// 들어간 트럭이 없으므로 0을 추가한다.
            que.push(0)
						// 트럭을 보내지 않았기떼문에 대기열로 돌려보낸다.
            truck_weights.unshift(now);
        }
				// 횟수계산을 위해 매 계산마다 더해준다.
        answer++
    }
    
    return answer;
}
