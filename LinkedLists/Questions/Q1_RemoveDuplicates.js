class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }

  // remove duplicates from sorted list
  removeDuplicates() {
    if (!this.head) return null;
    let node = this.head;

    while (node.next != null) {
      if (node.value == node.next.value) {
        node.next = node.next.next;
        this.size--;
      } else {
        node = node.next;
      }
    }
  }
}

const list = new LinkedList();
console.log(list, "listtttttttt");
list.print();

list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log(list, "listtttttttttttt");
list.print();
