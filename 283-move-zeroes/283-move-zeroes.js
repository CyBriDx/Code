/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let zeros = 0
  for (let i = 0; i < nums.length; i++) {
   let isZero = nums[i] === 0
     if (isZero){
        zeros++
        nums.splice(i, 1)
        i--
      }
    }
  for (let i = 0; i < zeros; i++){
      nums.push(0)
  }
 return nums
};