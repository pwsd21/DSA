// Function to reverse a linked list
const reverseList = (head) => {
  let prev = null; // Initialize prev pointer to null
  let current = head; // Initialize current pointer to head of the list

  // Traverse the list and reverse the links
  while (current != null) {
    const nextNode = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev pointer forward
    current = nextNode; // Move current pointer forward
  }

  return prev; // Return the new head of the reversed list
};
