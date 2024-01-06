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

  addFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      newNode.next = newNode; // Point to itself for circular
      this.head = newNode;
    } else {
      newNode.next = this.head.next;
      this.head.next = newNode;
    }
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      newNode.next = newNode; // Point to itself for circular
      this.head = newNode;
    } else {
      newNode.next = this.head.next;
      this.head.next = newNode;
      this.head = newNode; // Update head for circular
    }
  }

  size() {
    let count = 0;
    let current = this.head;

    if (!current) {
      return count;
    }

    do {
      count++;
      current = current.next;
    } while (current !== this.head);

    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      this.addFirst(data);
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) {
      return;
    }

    if (this.head === this.head.next) {
      this.head = null;
    } else {
      this.head.next = this.head.next.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    if (this.head === this.head.next) {
      this.head = null;
    } else {
      current.next = this.head.next;
      this.head = current;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log("Invalid Index");
      return;
    }

    if (index === 0) {
      this.removeTop();
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next === this.head) {
      this.head = current;
    }

    current.next = current.next.next;
  }

  printList() {
    let current = this.head;

    if (!current) {
      return;
    }

    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const myCircularList = new LinkedList();

myCircularList.addFirst(5);
myCircularList.addFirst(6);
myCircularList.addFirst(8);
myCircularList.addFirst(7);
myCircularList.addFirst(9);
myCircularList.addAt(2, 10);

myCircularList.printList();
