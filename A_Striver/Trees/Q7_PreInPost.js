class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function preInPostTraversal(root) {
  let pre = [];
  let inOrder = [];
  let post = [];

  if (!root) {
    return [];
  }

  // this stack will be storing [node, number]
  let stack = [];

  // Start with the root
  // node and state 1 (preorder)
  stack.push([root, 1]);

  while (stack.length > 0) {
    let [node, state] = stack.pop();

    // means root is at 1st position in PREORDER
    if (state === 1) {
      pre.push(node.data);

      state = 2;

      stack.push([node, state]);

      if (node.left != null) {
        stack.push([node.left, 1]);
      }
    } else if (state === 2) {
      inOrder.push(node.data);

      state = 3;

      stack.push([node, state]);

      if (node.right != null) {
        stack.push([node.right, 1]);
      }
    } else {
      post.push(node.data);
    }
  }

  return [pre, inOrder, post];
}

function printArray(arr) {
  // Iterate through the array and print each element
  for (let val of arr) {
    process.stdout.write(val + " ");
  }
  process.stdout.write("\n");
}

function main() {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(5);
  root.left.left = new Node(3);
  root.left.right = new Node(4);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  let traversals = preInPostTraversal(root);

  let pre = traversals[0];
  let inOrder = traversals[1];
  let post = traversals[2];

  process.stdout.write("Preorder traversel:");
  printArray(pre);

  process.stdout.write("Inorder traversel:");
  printArray(inOrder);

  process.stdout.write("Postorder traversel:");
  printArray(post);
}

main();
