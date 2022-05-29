/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mapH = new Map()
    nums.forEach(a => {
        if (mapH.get(a) === undefined) {
            mapH.set(a, 0)
        } else {
            mapH.set(a, mapH.get(a) + 1)
        }
    } )
    return Math.max(...mapH.values()) > 0;
};