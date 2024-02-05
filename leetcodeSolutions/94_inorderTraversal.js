// LC 94: binary tree inorder traversal
// inorder = left, root, right

const inorderTraversal = (root) => {
  // base case
  if (!root) return [];
  const result = [];

  const inOrder = (node) => {
    if (node) {
      inOrder(node.left);
      result.push(node.val);
      inOrder(node.right);
    }
  };

  inOrder(root);
  return result;
};
