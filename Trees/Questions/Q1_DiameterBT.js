var diameterOfBinaryTree = function (root) {
  // Define a helper function to calculate the diameter and update result
  const calculateDiameterAndDepth = (node, result) => {
    // Base case: if the current node is null, return 0
    if (!node) return 0;

    // Recursively calculate the depth of left and right subtrees
    const leftDepth = calculateDiameterAndDepth(node.left, result);
    const rightDepth = calculateDiameterAndDepth(node.right, result);

    // Update the maximum diameter encountered so far
    result[0] = Math.max(result[0], leftDepth + rightDepth);

    // Return the depth of the current node
    return Math.max(leftDepth, rightDepth) + 1;
  };

  // Initialize an array to store the maximum diameter encountered
  const result = [0];
  // Call the helper function to calculate diameter and depth starting from the root
  calculateDiameterAndDepth(root, result);
  // Return the maximum diameter encountered
  return result[0];
};
