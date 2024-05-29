var copyRandomList = function (head) {
  // Check if the original list is empty
  if (head === null) {
    return null; // Return an empty copied list
  }

  // Create a map to store the mapping between old nodes and new nodes
  var nodeMap = new Map();

  // First pass: Create new nodes for each old node and store them in the map
  var current = head;
  while (current !== null) {
    var oldNode = current;
    var newNode = new Node(oldNode.val); // Create a new node with the same value
    nodeMap.set(oldNode, newNode); // Store the mapping between old and new nodes
    current = current.next;
  }

  // Second pass: Update the 'next' and 'random' pointers for the new nodes
  current = head;
  while (current !== null) {
    var newNode = nodeMap.get(current);
    newNode.next = nodeMap.get(current.next) || null; // Update 'next' pointer
    newNode.random = nodeMap.get(current.random) || null; // Update 'random' pointer
    current = current.next;
  }

  // Return the head of the copied linked list
  return nodeMap.get(head);
};
