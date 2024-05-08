// DFS will be used

// Recursive - inorder, preorder, postorder
// Iterative - Levelorder

// Preorder - Root, Left, Right
// Reverse Preorder - Root, Right,Left

// Whenever we are returning an answer, we don't consider space complexity of data structure

// Node class for the binary tree
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Function to return the
  // Right view of the binary tree
  rightsideView(root) {
    // Array to store the result
    const res = [];

    // Call the recursive function
    // to populate the right-side view
    this.recursionRight(root, 0, res);

    return res;
  }

  // Function to return the
  // Left view of the binary tree
  leftsideView(root) {
    // Array to store the result
    const res = [];

    // Call the recursive function
    // to populate the left-side view
    this.recursionLeft(root, 0, res);

    return res;
  }

  // Recursive function to traverse the
  // binary tree and populate the left-side view
  recursionLeft(root, level, res) {
    // Check if the current node is null
    if (!root) {
      return;
    }

    // Check if the size of the result array
    // is equal to the current level
    if (res.length === level) {
      // If equal, add the value of the
      // current node to the result array
      res.push(root.data);
    }

    // Recursively call the function for the
    // left child with an increased level
    this.recursionLeft(root.left, level + 1, res);

    // Recursively call the function for the
    // right child with an increased level
    this.recursionLeft(root.right, level + 1, res);
  }

  // Recursive function to traverse the
  // binary tree and populate the right-side view
  recursionRight(root, level, res) {
    // Check if the current node is null
    if (!root) {
      return;
    }

    // Check if the size of the result array
    // is equal to the current level
    if (res.length === level) {
      // If equal, add the value of the
      // current node to the result array
      res.push(root.data);

      // Recursively call the function for the
      // right child with an increased level
      this.recursionRight(root.right, level + 1, res);

      // Recursively call the function for the
      // left child with an increased level
      this.recursionRight(root.left, level + 1, res);
    }
  }
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right = new Node(3);
root.right.right = new Node(10);
root.right.left = new Node(9);

const solution = new Solution();

// Get the Right View traversal
const rightView = solution.rightsideView(root);

// Print the result for Right View
console.log("Right View Traversal:", rightView.join(" "));

// Get the Left View traversal
const leftView = solution.leftsideView(root);

// Print the result for Left View
console.log("Left View Traversal:", leftView.join(" "));

// Leetcode Template solution

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
 * @return {number[]}
 */
const rightSideView = (root) => {
  if (!root) {
    return [];
  }
  const res = [];
  recursiveRight(root, 0, res);
  return res;
};

function recursiveRight(node, level, res) {
  if (!node) {
    return;
  }

  if (res.length === level) {
    res.push(node.val);
  }
  recursiveRight(node.right, level + 1, res);
  recursiveRight(node.left, level + 1, res);
}
