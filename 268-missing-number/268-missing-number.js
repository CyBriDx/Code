/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length
    let sum = (len)*(len + 1)/2
    let actSum = nums.reduce((sum,iter) => sum + iter , 0)
    return sum - actSum
};