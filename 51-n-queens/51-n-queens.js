/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var res = []
    backTrack(res,n)
    return res
};

function backTrack(res,n,board=[],r=0) {
    if (r===n) {
        res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n-c-1)))
        return
    }
    for (let c = 0; c < n; c++) {
        if(!board.some((col,row) => col === c || col === c + r - row || col === c - r + row)) {
            board.push(c)
            backTrack(res, n, board, r+1)
            board.pop()
        }
    }
}