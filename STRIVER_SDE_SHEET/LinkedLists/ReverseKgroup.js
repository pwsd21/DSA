var reverseKGroup = function (head, k) {
  // Initialize an empty stack to hold nodes
  let stack = [];
  // Create a new ListNode to hold the result, initially pointing to -1
  let newNode = new ListNode(-1);
  // Create a temporary pointer to manipulate the result list
  let temp = newNode;

  // Iterate through the linked list until head becomes null
  while (head) {
    // Push k nodes into the stack
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next;
    }

    // If the stack has k nodes, pop and link them in reverse order
    if (stack.length === k) {
      while (stack.length > 0) {
        temp.next = stack.pop();
        temp = temp.next;
      }
      // Link the last node of the reversed group to the remaining list
      temp.next = head;
    }
  }

  // Return the next node of the dummy node, which is the head of the reversed list
  return newNode.next;
};
