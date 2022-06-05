/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var res = []
    backtrack(res,n)
    return res.length
};

var backtrack = (res,n,board=[],r=0) => {
    if (r === n) {
        res.push(board.map(c => '.'.repeat(c) + 'Q' +'.'.repeat(n-c-1)))
        return
    }
    
    for (let c = 0; c < n; c++) {
        if(!board.some((col,row) => col === c || col === c + r - row || col === c - r + row)) {
            board.push(c)
            backtrack(res,n,board,r+1)
            board.pop()
        }
    }
}