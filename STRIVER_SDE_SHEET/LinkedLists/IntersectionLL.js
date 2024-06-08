const intersectionLL = (headA, headB) => {
  // If either list is empty, there can be no intersection.
  if (!headA || !headB) {
    return null;
  }

  let temp1 = headA;
  let temp2 = headB;

  // Traverse both lists. When either pointer reaches the end of a list, redirect it to the head of the other list.
  while (temp1 !== temp2) {
    // Move to the next node in each list.
    temp1 = temp1.next;
    temp2 = temp2.next;

    // If the two pointers are equal, it means we have found the intersection node.
    if (temp1 === temp2) {
      return temp1;
    }

    // If temp1 reaches the end of list A, redirect it to the head of list B.
    if (temp1 == null) {
      temp1 = headB;
    }

    // If temp2 reaches the end of list B, redirect it to the head of list A.
    if (temp2 === null) {
      temp2 = headA;
    }
  }

  // If the pointers meet at null, it means there is no intersection.
  return temp1;
};
