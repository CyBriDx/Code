/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let arr = [].concat(...nums)
    let hashMap = new Map()
    for (let num of arr) {
        if(hashMap.get(num) === undefined) {
            hashMap.set(num,0)
        }
        else {
            hashMap.set(num, hashMap.get(num) + 1)
        }
    }
    return [...hashMap]
        .map(([k,v]) => {
        if (v == nums.length - 1) {
            return k
        } else {
            return -1
        }
    })
        .filter(a => a !== -1)
        .sort((a,b) => a - b)
};