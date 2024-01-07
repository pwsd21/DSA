// current <-> temp

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

  // Add a new node with data to the beginning of the list
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add a new node with data to the end of the list
  addLast(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse to the end of the list and add the new node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Return the number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // addAt using Recursion

  // Add a new node with data at a specified inde
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    // If index is 0, add the new node at the beginning
    if (index == 0) {
      this.addFirst(data); // addFirst(data)
      return;
    }

    // Traverse to the node at the (index - 1) position and insert the new node
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Remove the first node in the list
  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // Remove the last node in the list
  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    // Set the next of the second last node to null
    current.next = null;
  }

  // Remove the node at a specified index
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid Index");
      return;
    }

    // If index is 0, remove the first node
    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    // Traverse to the node at the (index - 1) position and remove the next node
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print the data of all nodes in the list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myLinkedList = new LinkedList();

myLinkedList.addFirst(5);
myLinkedList.addFirst(6);
myLinkedList.addFirst(8);
myLinkedList.addFirst(7);
myLinkedList.addFirst(9);
// myLinkedList.removeAt(1);
myLinkedList.addAt(2, 10);

myLinkedList.printList();
// console.log(myLinkedList);
