// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
    if(root == null){
        return root;
    }
    invertTree(root.left);
    invertTree(root.right);
 
    const c = root.left;
    root.left = root.right;
    root.right = c;
    return root ;  
};