const removeNth = (head, n) => {
  let fast = head;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!fast) {
      // If n is greater than the length of the list, return the original head
      return head;
    }
    fast = fast.next;
  }

  // If fast is null after the initial movement, it means we need to remove the head node
  if (!fast) {
    return head.next;
  }

  let slow = head;

  // Move both fast and slow pointers until fast reaches the end of the list
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Skip the N-th node from the end
  slow.next = slow.next.next;

  return head;
};
