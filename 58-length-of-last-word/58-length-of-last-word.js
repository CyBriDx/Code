/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(" ").filter( e => e !== "")[s.split(" ").filter( e => e !== "").length - 1].length;
};