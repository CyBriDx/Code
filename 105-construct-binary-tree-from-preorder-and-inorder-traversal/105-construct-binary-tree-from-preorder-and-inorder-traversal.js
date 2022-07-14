/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder) return null;
    // get a fast access to the indexes
    let memory = new Map();
    for (let [i, e] of inorder.entries()) memory.set(e, i);
    // keep the current index of inserted nodes to query the preorder
    let index = 0;
    // build the actual tree
    let build = (l, r) => {
        if (r < l) return null;
        let node = new TreeNode(preorder[index]);
        // get the index of this node in the inorder
        let i = memory.get(preorder[index]);
        // increment index of inserted nodes
        index += 1;
        // build recursively
        node.left = build(l, i - 1);
        node.right = build(i + 1, r);
        return node;
    }
    return build(0, preorder.length - 1);
};
