/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumUniqueSubarray = function(N) {
    let a = new Int8Array(10001), sum = max = 0, len = N.length
    for (let l = 0, r = 0; r < len; r++) {
        a[N[r]]++, sum += N[r]
        while (a[N[r]] > 1) a[N[l]]--, sum -= N[l++]
        max = Math.max(sum,max)
    }
    return max
};