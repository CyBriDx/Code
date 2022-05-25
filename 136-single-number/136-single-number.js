/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashMap = new Map();
    for (let num of nums) {
        if ((hashMap.get(num)) !== undefined)
            hashMap.set(num, hashMap.get(num) + 1);
        else 
            hashMap.set(num, 1);
    }
    for (let [key, value] of hashMap.entries()) {
        if (value === 1) {
            return key;
        }
    }
};