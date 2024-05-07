const inorderTraversal = (root) => {
  let result = [];

  function inorder(root) {
    if (!root) {
      return;
    }

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  return result;
};

// Morris Inorder Traversal - Without using recursion and Stack - Threaded Binary Tree

// In-order Morris Traversal:
// 1st case: if left is null, print current node and go right
// 2nd case: before going left, make right most node on left subtree connected to current node, then go left
// 3rd case: if thread is already pointed to current node, then remove the thread

// TreeNode structure
class TreeNode {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Function to perform iterative Morris
  // inorder traversal of a binary tree
  getInorder(root) {
    // Array to store the
    // inorder traversal result
    const inorder = [];
    // Pointer to the current node,
    // starting from the root
    let cur = root;

    // Loop until the current
    // node is not null
    while (cur !== null) {
      // If the current node's
      // left child is null
      if (cur.left === null) {
        // Add the value of the current
        // node to the inorder array
        inorder.push(cur.val);
        // Move to the right child
        cur = cur.right;
      } else {
        // If the left child is not null,
        // find the predecessor (rightmost node
        // in the left subtree)
        let prev = cur.left;
        while (prev.right && prev.right !== cur) {
          prev = prev.right;
        }

        // If the predecessor's right child
        // is null, establish a temporary link - creating a thread between rightmost element and root
        // and move to the left child
        if (prev.right === null) {
          prev.right = cur;
          cur = cur.left;
        } else {
          // If the predecessor's right child
          // is already linked, remove the link,
          // add the current node to the inorder array,
          // and move to the right child
          prev.right = null;
          inorder.push(cur.val);
          cur = cur.right;
        }
      }
    }

    // Return the inorder
    // traversal result
    return inorder;
  }
}

// Main function
function main() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.left.right.right = new TreeNode(6);

  const sol = new Solution();

  const inorder = sol.getInorder(root);

  console.log("Binary Tree Morris Inorder Traversal: " + inorder.join(" "));
}

// Run the main function
main();
