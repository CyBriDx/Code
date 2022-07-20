/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let count = 0
  for(let w of words){
    if(findSubsequence(s, w)) count++
  }
  return count
};
  
function findSubsequence(s, w){
  let idx = -1
  for(const c of w){
    const found = s.indexOf(c, idx+1)
    if(found == -1) return false
    idx = found
  }
  return true
}