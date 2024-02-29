class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeSortLinkedList = (head) => {
  if (!head || !head.next) {
    return head;
  }

  const merge = (left, right) => {
    const dummy = new ListNode(0);
    let current = dummy;

    while (left && right) {
      if (left.val < right.val) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    current.next = left || right;

    return dummy.next;
  };

  const getMiddle = (node) => {
    let slow = node;
    let fast = node.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const middle = getMiddle(head);
  const left = mergeSortLinkedList(head);
  const right = mergeSortLinkedList(middle.next);

  middle.next = null; // Split the list into two halves

  return merge(left, right);
};

// Example usage:
const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
const sortedList = mergeSortLinkedList(head);
console.log(sortedList);
