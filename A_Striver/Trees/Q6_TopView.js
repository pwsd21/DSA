// In order to solve any Binary Tree Question, we need to follow TRAVERSAL
// Either we follow Recursive traversal or LEVEL_ORDER Traversal

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  topView(root) {
    const ans = [];
    if (!root) {
      return ans;
    }
    let mpp = new Map();
    const q = [[root, 0]];

    while (q.length > 0) {
      let [node, line] = q.shift();

      // Main logic that makes difference between top view and bottom view
      if (!mpp.has(line)) {
        mpp.set(line, node.data);
      }

      if (node.left != null) {
        q.push([node.left, line - 1]);
      }

      if (node.right != null) {
        q.push([node.right, line + 1]);
      }
    }
    for (let [key, value] of mpp) {
      ans.push(value);
    }
    return ans;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
root.right.right = new Node(7);

const solution = new Solution();

let topView = solution.topView(root);

console.log("top view", topView);
