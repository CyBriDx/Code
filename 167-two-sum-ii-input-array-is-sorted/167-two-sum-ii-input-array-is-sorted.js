/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let hashMap = new Map()
    
    for (let iter = 0; iter < numbers.length; iter++) {
        if(hashMap.get(target - numbers[iter]) === undefined) {
            hashMap.set(numbers[iter], iter)
        } else {
            return [hashMap.get(target - numbers[iter]) + 1, iter + 1]
        }
    }
    return [-1]
};