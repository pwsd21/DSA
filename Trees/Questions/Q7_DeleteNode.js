function min(root) {
  if (root.left === null) {
    return root;
  }
  return min(root.left);
}

var deleteNode = function (root, key) {
  if (root === null) return root;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    //left right available
    if (root.left !== null && root.right !== null) {
      let minData = min(root.right);
      root.val = minData.val;
      root.right = deleteNode(root.right, minData.val);
      return root;
    } else if (root.left !== null) {
      //only left available
      return root.left;
    } else if (root.right !== null) {
      //only right available
      return root.right;
    } else {
      return null;
    }
  }

  return root;
};
