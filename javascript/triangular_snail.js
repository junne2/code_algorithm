function solution(n) {
    var answer = [];
    let graph = [];
    let y = -1;
    let x = 0;
    let num = 0;
    //new Array(n).fill().map((_,idx)=> new Array(idx + 1));
    for (let i = 1; i < n + 1; i++) {
        let tmp = Array(i).fill(0)
        graph.push(tmp)
    }
    while (n > 0){
        for(let i = 0; i < n; i++) graph[++y][x] = ++num
        for(let i = 0; i < n-1; i++) graph[y][++x] = ++num
        for(let i = 0; i < n-2; i++) graph[--y][--x] = ++num
        
        n -= 3
    }
    
    answer = graph.flat();
    console.log(graph)
    return answer;
}
