class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class ListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function convertBinaryTreeToDLL(root) {
  if (!root) return null;

  let head = null;
  let prev = null;

  const inorderTraversal = (node) => {
    if (!node) return;

    // Traverse the left subtree
    inorderTraversal(node.left);

    // Convert TreeNode to ListNode
    const newNode = new ListNode(node.val);

    if (prev) {
      prev.next = newNode;
      newNode.prev = prev;
    } else {
      // This node is the head of the DLL
      head = newNode;
    }

    // Update previous node
    prev = newNode;

    // Traverse the right subtree
    inorderTraversal(node.right);
  };

  inorderTraversal(root);
  return head;
}

// Helper function to print the doubly linked list
function printDLL(head) {
  let current = head;
  while (current) {
    process.stdout.write(`${current.val} `);
    current = current.next;
  }
  console.log();
}

// Example usage
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

const head = convertBinaryTreeToDLL(root);
printDLL(head); // Output: 1 2 3 4 5
