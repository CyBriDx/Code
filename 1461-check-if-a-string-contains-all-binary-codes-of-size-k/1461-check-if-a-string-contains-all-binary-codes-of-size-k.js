/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let setSubStr = new Set()
    let numStr = Math.pow(2, k)

    for (let i = 0; i < s.length - k + 1; i++) {
        setSubStr.add(s.substring(i,i + k))
    }
    return setSubStr.size === numStr 
};