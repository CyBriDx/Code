/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
    var ts = s => [19, -1, 19, 19, 0, 2, 2][s & 0xf] + (s & ~0xf);
    var dfs = root => root ? ts(dfs(root.left) + dfs(root.right)) : 2;
    return Math.floor(ts(dfs(root) + 2) / 16);
};
