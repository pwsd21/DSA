// Function to merge two sorted linked lists
const mergeTwoLists = function (l1, l2) {
  // If one of the lists is empty, return the other list
  if (!l1) return l2;
  else if (!l2) return l1;
  // If the value of the current node in l1 is less than or equal to the value of the current node in l2
  else if (l1.val <= l2.val) {
    // Merge the remaining nodes of l1 with l2 and update the next pointer of l1
    l1.next = mergeTwoLists(l1.next, l2);
    return l1; // Return l1 as the merged list
  } else {
    // If the value of the current node in l2 is less than the value of the current node in l1
    // Merge the remaining nodes of l2 with l1 and update the next pointer of l2
    l2.next = mergeTwoLists(l1, l2.next);
    return l2; // Return l2 as the merged list
  }
};
