## [1차 다트 게임]

[https://programmers.co.kr/learn/courses/30/lessons/17682](https://programmers.co.kr/learn/courses/30/lessons/17682)

```jsx
예제	 dartResult	answer	  설명
1	    1S2D*3T	  37	      11 * 2 + 22 * 2 + 33
2	    1D2S#10S	9	        12 + 21 * (-1) + 101
3   	1D2S0T	  3	        12 + 21 + 03
4   	1S*2T*3S	23	      11 * 2 * 2 + 23 * 2 + 31
5.  	1D#2S*3S	5	        12 * (-1) * 2 + 21 * 2 + 31
6	    1T2D3D#	  -4	      13 + 22 + 32 * (-1)
7	   1D2S3T*	  59	      12 + 21 * 2 + 33 * 2
 

function solution(dartResult) {
    var answer = [];
    var ans = 0
    var S = [0,1,2,3,4,5,6,7,8,9,10]
    var N = dartResult.length
    var count = 0
    var co= 0
    for (var i = 0; i < N; i++){
        if (dartResult[i] in S) {
            continue
        }else if (dartResult[i] === 'S'){
            if (dartResult[i-2] in S){
                answer.push(parseInt([dartResult[i-2],dartResult[i-1]].join('')));
                i += 1
            }else{
                answer.push((dartResult[i-1]))
                count += 1
            }
        }else if (dartResult[i] === 'D'){
            if (dartResult[i-2] in S){
                answer.push(parseInt([dartResult[i-2],dartResult[i-1]].join('')));
                i += 1
            }else{
                co = dartResult[i-1]**2
                answer.push(co)
                count += 1
            }
        }else if (dartResult[i] === 'T'){
            if (dartResult[i-2] in S){
                answer.push(parseInt([dartResult[i-2],dartResult[i-1]].join('')));
                i += 1
            }else{
                co = dartResult[i-1]**3
                answer.push(co)
                count += 1
            }
        }else if (dartResult[i] === '*'){
            if ( i < 3 ){
                answer[0] = answer[0] * 2
            }else if ( i < 6 ){
                answer[0] = answer[0] * 2
                answer[1] = answer[1] * 2
            }else{
                answer[1] = answer[1] * 2
                answer[2] = answer[2] * 2
            }
            
        }else if (dartResult[i] === '#'){
            answer[count-1] = answer[count-1]*(-1)
        }
    }
    for (var j of answer) {
        ans += parseInt(j)
    }
    return ans;
}
```

\
