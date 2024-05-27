class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    let new_node = new Node(data);
    new_node.next = this.head;
    this.head = new_node;
  }

  display() {
    let temp = this.head;
    while (temp != null) {
      document.write(temp.data, "</br>");
      temp = temp.next;
    }
  }

  deleteNthNodeFromEnd(head, n) {
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }

    if (!fast) return head.next;

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
  }
}
