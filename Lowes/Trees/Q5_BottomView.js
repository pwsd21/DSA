// LEVEL ORDER TRAVERSAL CONCEPT
// Using Hashmap and Queue
// we use Map -  to store sorted lines

// Node structure for the binary tree
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  bottomView(root) {
    let ans = []; // Vector to store the result
    // Check if the tree is empty
    if (root === null) {
      return ans;
    }
    // Map to store the bottom view nodes based on their vertical positions
    let mpp = new Map();
    // Queue for BFS traversal, each element is a pair containing node and its vertical position initially [root, 0] - to reduce pushing in seperate step
    const q = [[root, 0]];
    // BFS traversal
    while (q.length > 0) {
      // Retrieve the node and its vertical position from the front of the queue
      let [node, line] = q.shift();
      // Update the map with the node's data for the current vertical position
      mpp.set(line, node.data);
      // Process left child
      if (node.left !== null) {
        // Push the left child with a decreased vertical position into the queue
        q.push([node.left, line - 1]);
      }
      // Process right child
      if (node.right !== null) {
        // Push the right child with an increased vertical position into the queue
        q.push([node.right, line + 1]);
      }
    }
    // Transfer values from the map to the result vector
    for (let [key, value] of mpp) {
      ans.push(value);
    }
    return ans;
  }
}

// Creating a sample binary tree
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right = new Node(3);
root.right.right = new Node(10);
root.right.left = new Node(9);

let solution = new Solution();

// Get the Bottom View traversal
let bottomView = solution.bottomView(root);

// Print the result
console.log("Bottom View Traversal: ");
console.log(bottomView);
