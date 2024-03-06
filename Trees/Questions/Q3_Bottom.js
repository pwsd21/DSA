class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Utility function to perform vertical order traversal and store nodes
  verticalOrderTraversal(root, hd, map) {
    if (!root) {
      return;
    }

    if (!map.has(hd)) {
      map.set(hd, []);
    }

    map.get(hd).push(root.value);

    this.verticalOrderTraversal(root.left, hd - 1, map);
    this.verticalOrderTraversal(root.right, hd + 1, map);
  }

  // Function to find and print the top view of the binary tree
  topView() {
    if (!this.root) {
      console.log("Tree is empty");
      return;
    }

    const map = new Map();
    this.verticalOrderTraversal(this.root, 0, map);

    for (const [hd, nodes] of map) {
      console.log(nodes[0]);
    }
  }

  // Function to find and print the bottom view of the binary tree
  bottomView() {
    if (!this.root) {
      console.log("Tree is empty");
      return;
    }

    const map = new Map();
    this.verticalOrderTraversal(this.root, 0, map);

    for (const [hd, nodes] of map) {
      console.log(nodes[nodes.length - 1]);
    }
  }

  // Function to find and print the left view of the binary tree
  leftView() {
    this.leftViewUtil(this.root, 1);
  }

  leftViewUtil(root, level) {
    if (!root) {
      return;
    }

    if (level > this.maxLevel) {
      console.log(root.value);
      this.maxLevel = level;
    }

    this.leftViewUtil(root.left, level + 1);
    this.leftViewUtil(root.right, level + 1);
  }

  // Function to find and print the right view of the binary tree
  rightView() {
    this.rightViewUtil(this.root, 1);
  }

  rightViewUtil(root, level) {
    if (!root) {
      return;
    }

    if (level > this.maxLevel) {
      console.log(root.value);
      this.maxLevel = level;
    }

    this.rightViewUtil(root.right, level + 1);
    this.rightViewUtil(root.left, level + 1);
  }
}

// Usage
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log("Top View:");
tree.topView();

console.log("\nBottom View:");
tree.bottomView();

console.log("\nLeft View:");
tree.leftView();

console.log("\nRight View:");
tree.rightView();
