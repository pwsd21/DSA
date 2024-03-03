class Stack {
  constructor() {
    this.items = [];
    this.maxValue = Number.MAX_SAFE_INTEGER;
    this.minValue = Number.NEGATIVE_INFINITY;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  add(element) {
    return this.items.unshift(element);
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }

  min() {
    return this.isEmpty() ? null : this.minValue;
  }

  max() {
    return this.isEmpty() ? null : this.maxValue;
  }

  updateMinMax() {
    this.minValue = !this.isEmpty()
      ? Math.min(...this.items)
      : Number.NEGATIVE_INFINITY;
    this.maxValue = !this.isEmpty()
      ? Math.max(...this.items)
      : Number.MAX_SAFE_INTEGER;
  }
}
