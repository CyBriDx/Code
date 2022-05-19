/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sorted = nums.sort((a,b) => a - b);
    let sum = 0, result = [];
    for (let i = 0; i < sorted.length - 2; i++) {
        let left = i + 1, right = sorted.length - 1;
        if (sorted[i] != sorted[i - 1]) {
            while (left < right) {
                sum = sorted[i] + sorted[left] + sorted[right]
                if (sum < 0) {
                    left = left + 1
                } else if (sum > 0) {
                    right = right - 1
                } else {
                    result.push([sorted[i], sorted[left], sorted[right]])
                    while (left < right && sorted[left] === sorted[left + 1]) left++;
                    while (left < right && sorted[right] == sorted[right-1]) right--;
                    left++;
                    right--
                }
            }
        }
    }
    return result;
};