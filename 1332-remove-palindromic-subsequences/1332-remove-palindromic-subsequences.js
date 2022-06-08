/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let count = 0
    if (s.length === 1)
        return 1
    else if (isPalindrome(s))
        return 1
    else {
        return 2
        }
};

var isPalindrome = (str) => {
    return str === str.split('').reverse().join('')
}