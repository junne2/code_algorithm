/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var middleCharacters = function(str) {
        return str.slice(1, -1);
    };
    if (x.length <= 1) {
        return true;
    }
    if (x.slice(0,1) !== x.slice(-1)){
        return false;
    }
    return isPalindrome(middleCharacters(x));
};
