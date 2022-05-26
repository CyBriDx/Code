/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return (n >>> 0).toString(2).split("").filter(a => a === '1').length;
};