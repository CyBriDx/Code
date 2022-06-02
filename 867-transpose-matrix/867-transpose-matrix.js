/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {

    let tranMat = Array(matrix[0].length).fill().map(() => []);

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            tranMat[col][row] = matrix[row][col]
        }
    }
    return tranMat
};