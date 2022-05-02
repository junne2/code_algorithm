// s	                 return
// "try hello world"	  "TrY HeLlO WoRlD"

function solution(s) {
    var answer = '';
    const ans = s.split(' ')
    for (let i=0; i < ans.length; i++){
        for(let j in ans[i]){
            if (j % 2 == 0){
                answer += ans[i][j].toUpperCase();
            }else {
                answer += ans[i][j].toLowerCase();
            }
        }
        if (i !== ans.length-1){
            answer += " "
        }
    }
    return answer;
}
