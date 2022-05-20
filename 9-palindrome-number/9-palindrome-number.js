/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let compliment = String(x).split("").reverse().join("");
    let number = String(x).split("").join("");
    return compliment === number;
};