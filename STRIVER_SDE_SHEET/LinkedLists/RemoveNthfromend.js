// Function to remove the nth node from the end of a linked list
const removeNthFromEnd = function (head, n) {
  // Create a dummy node with value 0 and set its next pointer to the head of the original list
  let res = new ListNode(0, head);
  let dummy = res;

  // Move the head pointer n steps forward
  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  // Move both the head and dummy pointers until the head reaches the end of the list
  while (head) {
    head = head.next;
    dummy = dummy.next;
  }

  // Remove the nth node from the end by updating the next pointer of the node before it
  dummy.next = dummy.next.next;

  // Return the head of the modified list (excluding the dummy node)
  return res.next;
};
