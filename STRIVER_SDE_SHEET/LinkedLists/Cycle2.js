// O(n) & O(1)

var detectCycle = function (head) {
  // Initialize two pointers, slow and fast, both pointing to the head initially
  let slow = head;
  let fast = head;

  // Iterate until either fast reaches the end or fast.next or fast.next.next is null
  while (fast && fast.next && fast.next.next) {
    // Move slow pointer one step forward
    slow = slow.next;
    // Move fast pointer two steps forward
    fast = fast.next.next;

    // If slow and fast meet at any point, indicating a cycle
    if (slow === fast) {
      // Reset slow to the head
      slow = head;
      // Iterate slow and fast until they meet again, this time at the start of the cycle
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      // Return the node where they meet, which is the start of the cycle
      return slow;
    }
  }

  // If fast reaches the end without encountering a cycle, return null
  return null;
};
