class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  add(value) {
    this.items.push(value);
  }

  remove() {
    if (this.isEmpty()) {
      return "Empty Stack";
    }
    this.items.pop();
  }

  print() {
    console.log(this.items.toString());
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.add(10);
stack.add(20);
stack.add(30);
stack.remove();

console.log(stack);
console.log(stack.peak());
stack.print();
