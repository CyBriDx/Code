/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let sortedNums = nums.sort((a,b) => a - b),
        mid = sortedNums[Math.floor(sortedNums.length / 2)];
    
    return sortedNums.reduce((count, n) => count + Math.abs(n - mid), 0);
};
