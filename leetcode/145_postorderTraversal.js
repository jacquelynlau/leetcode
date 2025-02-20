// LC 145: binary tree postorder traversal
// postorder = left, right, root

const postorderTraversal = (root) => {
  // base case
  if (!root) return [];
  const result = [];

  const postOrder = (node) => {
    if (node) {
      postOrder(node.left);
      postOrder(node.right);
      result.push(node.val);
    }
  };

  postOrder(root);
  return result;
};
