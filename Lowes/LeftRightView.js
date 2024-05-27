class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  rightsideView(root) {
    const res = [];
    this.recursionRight(root, 0, res);
    return res;
  }

  leftsideView(root) {
    const res = [];
    this.recursionLeft(root, 0, res);
    return res;
  }

  recursionLeft(root, level, res) {
    if (!root) {
      return;
    }
    if (res.length === level) {
      res.push(root.data);
    }
    this.recursionLeft(root.left, level + 1, res);
    this.recursionLeft(root.right, level + 1, res);
  }

  recursionRight(root, level, res) {
    if (!root) {
      return;
    }
    if (res.length === level) {
      res.push(root.data);
      this.recursionRight(root.right, level + 1, res);
      this.recursionRight(root.left, level + 1, res);
    }
  }
}
