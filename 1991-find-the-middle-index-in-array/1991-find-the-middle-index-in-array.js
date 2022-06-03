
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    if (nums.length === 1)
        return 0
    for (let r = 0; r < nums.length; r++){
        let arr1 = nums.slice(r+1)
        let arr2 = nums.slice().splice(0, r)
        let sum1 = arr1.reduce((sum, num) => sum += num, 0)
        let sum2 = arr2.reduce((sum, num) => sum += num, 0)
        if (sum1 === sum2)
            return r
        else
            continue
    }
    return -1;
}