var rotateRight = function (head, k) {
  //find the length
  let length = 1;
  let pt = head;
  while (pt && pt.next) {
    length++;
    pt = pt.next;
  }

  //we're using modulo for the edge case of if the length is smaller than k
  k = k % length;

  //edge case -> if k is 0, we don't need a rotation
  if (k === 0) {
    return head;
  }

  //find the new tail
  let newTail = head;
  let spaces = length - k;
  while (spaces > 1) {
    spaces--;
    newTail = newTail.next;
  }

  //save the new head and reset appropriately
  let newHead = newTail.next;
  newTail.next = null;
  pt.next = head;
  return newHead;
};
