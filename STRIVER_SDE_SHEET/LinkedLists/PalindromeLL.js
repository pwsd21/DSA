const isPalindrome = (head) => {
  // Initialize two strings to store values of the linked list in forward and reverse order
  let str1 = "";
  let str2 = "";
  // Initialize a pointer to traverse the linked list starting from the head
  let node = head;

  // Traverse the linked list and construct two strings
  while (node != null) {
    // Append current node's value to str1
    str1 = `${str1}${node.val}`;
    // Prepend current node's value to str2 (to reverse the order)
    str2 = `${node.val}${str2}`;
    // Move to the next node
    node = node.next;
  }

  // Check if the strings are equal, indicating a palindrome
  return str1 === str2;
};
