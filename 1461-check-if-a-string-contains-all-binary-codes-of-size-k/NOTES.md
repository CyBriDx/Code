**Implemented the solution with below approach**
​
​
```
/**
* @param {string} s
* @param {number} k
* @return {boolean}
*/
var hasAllCodes = function(s, k) {
let numStr = Math.pow(2, k)
let cnt = 0
if (s.length === 1)
return false
for (let i = 0; i < numStr; i++) {
let num = i.toString(2)
num = num.length < k ? "0".repeat(k-num.length) + num : num
if (s.search(num) !== -1) {
cnt++
}
}
return cnt === numStr
};
​
```
​
​
But this will result in TLE for k = 20, alternatively we can create a set and add all substring in the set (as this is set all substrings will be unique)
Than we can compare the length of set and length of possible solutions (viz 2 ^ k).