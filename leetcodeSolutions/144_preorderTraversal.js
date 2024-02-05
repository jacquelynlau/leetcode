// LC 144: binary tree preorder traversal
// preorder = root, left, right

const preorderTraversal = (root) => {
  // base case
  if (!root) return [];
  const result = [];

  const preOrder = (node) => {
    if (node) {
      result.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
    }
  };

  preOrder(root);
  return result;
};
