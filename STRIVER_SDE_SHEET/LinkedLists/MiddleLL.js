// Function to find the middle node of a linked list
const middleNode = function (head) {
  let fast = (slow = head); // Initialize fast and slow pointers to the head of the list
  // Traverse the list with two pointers: fast moves twice as fast as slow
  while (fast && fast.next) {
    fast = fast.next.next; // Move fast pointer two steps ahead
    slow = slow.next; // Move slow pointer one step ahead
  }
  return slow; // Return the middle node (or the second middle node if the list has an even number of nodes)
};
