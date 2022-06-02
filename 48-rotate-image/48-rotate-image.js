/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    // TRANSPOSING the matrix
    for (let row = 0; row < n; row++) {
        for (let col = row+1; col < n; col++) {
            if (row === col)
                continue
            else {
                matrix[row][col] = matrix[row][col] + matrix[col][row]
                matrix[col][row] = matrix[row][col] - matrix[col][row]
                matrix[row][col] = matrix[row][col] - matrix[col][row]
            }
        }
    }
    // REVERSING the matrix
    for(let row = 0; row < n; row++) {
        for (let col = 0; col < n/2; col++) {
            let tmp = matrix[row][col]
            matrix[row][col] = matrix[row][n - col - 1]
            matrix[row][n - col - 1] = tmp
        }
    }
    return matrix
};