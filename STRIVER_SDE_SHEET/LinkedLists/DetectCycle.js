const hasCycle = (head) => {
  // Initialize two pointers, slow and fast, both pointing to the head initially
  let slow = head;
  let fast = head;

  // Iterate through the linked list until either fast reaches the end or fast.next is null
  while (fast != null && fast.next != null) {
    // Move slow pointer one step forward
    slow = slow.next;
    // Move fast pointer two steps forward
    fast = fast.next.next;

    // If slow and fast meet at any point, there is a cycle
    if (slow === fast) {
      return true;
    }
  }

  // If fast reaches the end without encountering a cycle, return false
  return false;
};
