/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    // finding sum of array
    let sum = nums.reduce((acc,cur) => acc + cur, 0) - x
    if (sum < 0) return -1
    let maxLen = -Infinity, start = 0, runSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        runSum += nums[i]
        while (runSum > sum)
            runSum -= nums[start++]
        if (runSum === sum)
            maxLen = Math.max(maxLen, i - start + 1)
    }
    return maxLen === -Infinity ? -1 : nums.length - maxLen
};