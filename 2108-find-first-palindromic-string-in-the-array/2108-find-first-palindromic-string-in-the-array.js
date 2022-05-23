/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let palindrome = "";
    for ( word of words) {
        console.log(word.split("").reverse().join(""));
        if (word === word.split("").reverse().join("")) {
            palindrome = word ;
            break;
        }
    }
    return palindrome;
};