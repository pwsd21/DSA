var addTwoNumbers = function (l1, l2) {
  // Create a dummy node to hold the result
  let dummy = new ListNode();
  // Reference to the head of the result
  let res = dummy;
  // Variables to hold the sum, carry, and total sum
  let total = 0,
    carry = 0;

  // Loop until both input lists end and there is no carry left
  while (l1 || l2 || carry) {
    // Initialize total with carry
    total = carry;

    // Add current values of l1 and l2 if they exist
    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    // Extract the digit and carry
    let num = total % 10;
    carry = Math.floor(total / 10);

    // Create a new node with the digit and link it
    dummy.next = new ListNode(num);
    dummy = dummy.next;
  }

  // Skip the dummy node and return the result
  return res.next;
};
