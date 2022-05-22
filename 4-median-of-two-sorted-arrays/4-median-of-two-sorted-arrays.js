/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort( (a,b) => a-b)
    let median = 0;
    let mid = nums1.length%2;
    let midInd = Math.trunc(nums1.length/2)
    if(nums1.length === 1) {
        median = nums1[0];
    }
    else if (nums1.length%2===0) {
        median = (nums1[midInd - 1] + nums1[midInd])/2;
    } else {
        median = nums1[midInd];
    }
    console.log(midInd);
    return median;
};