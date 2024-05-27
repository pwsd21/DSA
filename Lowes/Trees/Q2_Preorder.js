const preorderTraversal = () => {
  let result = [];

  function preorder(root) {
    if (!root) {
      return;
    }

    result.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }

  preorder();

  return result;
};

// Morris preorder Traversal

class TreeNode {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  getPreOrder(root) {
    let result = [];

    let cur = root;

    while (cur != null) {
      if (cur.left === null) {
        result.push(cur.val);
        cur = cur.right;
      } else {
        let prev = cur.left;
        while (prev.right && prev.right != cur) {
          prev = prev.right;
        }

        if (prev.right === null) {
          prev.right = cur;
          result.push(cur.val);
          cur = cur.left;
        } else {
          prev.right = null;
          cur = cur.right;
        }
      }
    }
    return result;
  }
}

const main = () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.left.right.right = new TreeNode(6);
  let sol = new Solution();

  const preorder = sol.getPreOrder(root);

  console.log("Binary Tree Morris preorder Traversal: " + preorder.join(" "));
};

main();
