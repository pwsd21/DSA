class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of values of all grandchild nodes of a given node
function sumOfGrandChildren(node, mp) {
  let sum = 0;

  if (node.left) {
    sum +=
      getMaxSumUtil(node.left.left, mp) + getMaxSumUtil(node.left.right, mp);
  }

  if (node.right) {
    sum +=
      getMaxSumUtil(node.right.left, mp) + getMaxSumUtil(node.right.right, mp);
  }

  return sum;
}

// Function to calculate the maximum sum of nodes for a given subtree
function getMaxSumUtil(node, mp) {
  if (!node) return 0;

  // If node is already processed, return the stored result
  if (mp.has(node)) return mp.get(node);

  // Including the current node
  let incl = node.data + sumOfGrandChildren(node, mp);

  // Excluding the current node
  let excl = getMaxSumUtil(node.left, mp) + getMaxSumUtil(node.right, mp);

  // Store the result in the map and return the maximum of incl and excl
  mp.set(node, Math.max(incl, excl));
  return mp.get(node);
}

// Function to initiate the process and return the maximum sum of nodes in the binary tree
function getMaxSum(node) {
  let mp = new Map();
  return getMaxSumUtil(node, mp);
}

// Example usage
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.left.left = new Node(1);

console.log(getMaxSum(root)); // Output the result
