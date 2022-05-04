// sizes	                                          result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	       4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	   120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	   133


function solution(sizes) {
    var answer = 0;
    // 가로 세로 를 큰 순서가 앞으로 오도록 정리한다.
    const rot = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    
    // 제일 큰 사이즈를 찾아서 가로와 세로 길이를 기록한다.
    let maxSize = [0, 0];
    rot.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })

    // 두 수의 곱을 하여 지갑의 크기를 구한다.
    answer = maxSize[0]*maxSize[1];
    return answer
}
