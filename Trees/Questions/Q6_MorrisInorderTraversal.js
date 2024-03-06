var inorderTraversal = function (r) {
  const ans = [];
  var inOrderDfs = function (r) {
    if (!r) return;
    inOrderDfs(r.left);
    ans.push(r.val);
    inOrderDfs(r.right);
  };
  inOrderDfs(r);
  return ans;
};
