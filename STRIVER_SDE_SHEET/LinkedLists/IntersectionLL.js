var getIntersectionNode = function (headA, headB) {
  // Step 1: Initialize pointers nodeA and nodeB to heads of the linked lists
  let nodeA = headA;
  let nodeB = headB;

  // Step 2: Traverse both lists together until intersection or end
  while (nodeA !== nodeB) {
    // Move pointer nodeA to next node, or switch to headB if nodeA reaches end
    nodeA = !nodeA ? headB : nodeA.next;
    // Move pointer nodeB to next node, or switch to headA if nodeB reaches end
    nodeB = !nodeB ? headA : nodeB.next;
  }

  // Step 3: Return intersection node or null if no intersection found
  return nodeA;
};
