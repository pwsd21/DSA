class ListNode {
  constructor(val, next = null, child = null) {
    this.val = val;
    this.next = next;
    this.child = child; // Reference to child node (if any)
  }
}

const flatten = (head) => {
  // If the head is null, return null (empty list)
  if (!head) return null;

  // Initialize a pointer to traverse the linked list
  let curr = head;

  // Traverse the linked list
  while (curr) {
    // If the current node has a child
    if (curr.child) {
      // Store references to the next node and the child list
      let nextNode = curr.next;
      let childList = curr.child;

      // Unlink the child list from the current node
      curr.child = null;

      // Find the end of the child list
      let childEnd = childList;
      while (childEnd.next) {
        childEnd = childEnd.next;
      }

      // Link the child list to the current node's next pointer
      curr.next = childList;
      // Set the child list's previous pointer to the current node
      childList.prev = curr;
      // Link the end of the child list to the next node
      childEnd.next = nextNode;

      // If there's a next node, update its previous pointer
      if (nextNode) {
        nextNode.prev = childEnd;
      }
    }
    // Move to the next node in the original list
    curr = curr.next;
  }

  // Return the modified head of the flattened list
  return head;
};
