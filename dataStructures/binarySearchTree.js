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
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log("Tree is empty?", bst.isEmpty());
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 20));
