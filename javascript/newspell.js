// progresses	               speeds	             return
// [93, 30, 55]	            [1, 30, 5]	         [2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]


function solution(progresses, speeds) {
    var answer = [];
    let day =[];
    let cnt = 0
    let to = 0;
    
    for (let i in progresses){
        day.push(Math.ceil((100-progresses[i])/speeds[i]));
    }

    answer.push(1)
    to = day[0];

    for (let j = 1; j < day.length; j++){

        if (to < day[j]){
            answer.push(1)
            to = day[j]

        } else{
          answer[answer.length-1] += 1 
        }        
    }
    return answer;
}
