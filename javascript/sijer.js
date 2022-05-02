function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        // 대 소문자 구분
        var textArr = upper.includes(text)? upper : lower;
        // 다음 위치 문자 찾기
        var index = textArr.indexOf(text)+n;
        // 만약 찾는 문자가 Z를 지나는 경우 대비하기
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
