class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null; // New property for doubly linked list
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node with data to the beginning of the doubly linked list
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  // Add a new node with data to the end of the doubly linked list
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;
  }

  // Return the number of nodes in the doubly linked list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Add a new node with data at a specified index
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;
  }

  // Remove the first node in the doubly linked list
  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
  }

  // Remove the last node in the doubly linked list
  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    if (current.prev) {
      current.prev.next = null;
    } else {
      this.head = null;
    }
  }

  // Remove the node at a specified index
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      if (current.next) {
        current.next.prev = current;
      }
    }
  }

  // Print the data of all nodes in the doubly linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example Usage
const linkedlist = new DoublyLinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);
linkedlist.addLast(6);

linkedlist.removeTop();

linkedlist.addAt(2, 8);

linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log("size = " + linkedlist.size());
