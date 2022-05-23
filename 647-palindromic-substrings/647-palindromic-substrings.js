/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let matrix = [], count = 0;
    for (let c of s) {
        matrix.push(new Array(s.length).fill(0));
    }
    
    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
        count++;
    }
    
    for (let i = 1; i < s.length ; i++) {
        for (let j = 0; j < i ;j++) {
            if (j === i - 1 && s[i] === s[j]){
                matrix[j][i] = 1;
                count++;
            }
            else if(matrix[j+1][i-1] === 1 && s[i] === s[j]) {
                matrix[j][i] = 1;
                count++;                
            }
        }
    }
return count;
};