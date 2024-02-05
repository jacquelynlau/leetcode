// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // pointer to root node - when tree is empty: root points at null
    this.root = null;
  }
  isEmpty() {
    // return true if root points at null
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        // recursive
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        // recursive
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    // if tree is empty return false
    if (!root) {
      return false;
    } else {
      // check if root is the value being searched
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        // traverse left subtree recursively
        return this.search(root.left, value);
      } else {
        // traverse right subtree recursively
        return this.search(root.right, value);
      }
    }
  }

  // Depth First Search:
  // PreOrder Traversal
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // InOrder Traversal
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // PostOrder Traversal
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // Breadth First Search
  levelOrder() {
    const queue = []; // just using array here for simplicity
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  // Min value
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      // recursively traverse until we get left most leaf node
      return this.min(root.left);
    }
  }

  // Max value
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      // recursively traverse until we get right most leaf node
      return this.max(root.right);
    }
  }

  // BST Node Deletion
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

// console.log("Tree is empty?", bst.isEmpty());
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 20));

bst.levelOrder();
// console.log("Min:", bst.min(bst.root));
// console.log("Max:", bst.max(bst.root));
bst.delete(15);
bst.levelOrder();
