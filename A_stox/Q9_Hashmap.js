class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (const pair of this.table[index]) {
      if (pair.key === key) {
        return pair.value;
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return;
    }
    const pairIndex = this.table[index].findIndex((pair) => pair.key === key);
    if (pairIndex !== -1) {
      this.table[index].splice(pairIndex, 1);
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);

table.set("name", "Modi");
table.set("age", 25);

// console.log(table.get("name"));

table.set("naam", "Yogi");
table.display();
