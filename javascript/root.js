function solution(n) {
    var answer = 0;
    let ans = 0
    ans = Math.sqrt(n);
    if (ans % 1 === 0){
        answer = Math.pow(ans+1, 2);
    } else {
        answer = -1
    }
    return answer;
}
