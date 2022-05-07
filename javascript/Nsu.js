// n	  t. 	m. 	p. 	result
// 2	  4	  2	  1	  "0111"
// 16	16	2	  1	  "02468ACE11111111"
// 16	16	2	  2. 	"13579BDF01234567"

function solution(n, t, m, p) {
    var answer = '';
    let recod = '';
    let cnt = 0;

    
    while(recod.length <= t*m){
        recod += cnt.toString(n).toUpperCase();
        cnt ++;
    }
    
    cnt =0;
    
    for (let i = 0; i<recod.length; i++){
        if (cnt === t)
            break;
        if (i%m === p-1){
            answer += recod[i];
            cnt ++;
        }
    }
    return answer;
}
