/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr = arr.sort((a,b) => a - b)
    len = Math.floor(arr.length * 0.05)
    arr = arr.splice(len)
    arr.length = arr.length - len
    console.log(arr)
    return arr.reduce((a,c) => a + c)/arr.length
};