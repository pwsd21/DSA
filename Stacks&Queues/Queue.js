class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Empty Stack";
    }
    return this.items.shift();
  }

  print() {
    console.log(this.items);
  }

  peek() {
    if (this.isEmpty()) {
      return "Empty Queue";
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
queue.dequeue();
queue.print();
