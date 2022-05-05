/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0
    const romeNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000 
    }
    const Su = s.split('')
    const num = Su.map(rome => romeNum[rome])
    
     for (i=0; i< num.length; i++) {
        if (num[i] < num[i+1] ) {
        answer -= num[i]
        } else {
          answer += num[i]
        }
     }
    return answer
};
