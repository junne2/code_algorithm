function solution(n) {
    var answer = 0;
    let ans = n.toString(2).split('1').length;
    while (true) {
        n++
        if (n.toString(2).split('1').length === ans) {
            answer = n
            return answer
        }
    }
    
    return answer;
}
