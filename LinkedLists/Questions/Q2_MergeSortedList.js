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

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
}

const mergeList = (f, s) => {
  let ans = new LinkedList();
  let mergedNode = ans.head;
  while (f != null && s != null) {
    if (f.value < s.value) {
      if (mergedNode == null) {
        ans.append(f.value);
        mergedNode = ans.head;
      } else {
      }

      f = f.next;
    } else {
      ans.append(s.value);
      s = s.next;
    }
  }

  while (f != null) {
    ans.append(f.value);
    f = f.next;
  }

  while (s != null) {
    ans.append(s.value);
    s = s.next;
  }
  return ans;
};

const f = new LinkedList();
const s = new LinkedList();

f.append(1);
f.append(2);
f.append(4);

s.append(1);
s.append(3);
s.append(4);

console.log(f, s);
console.log("---------------------------------------");

console.log(mergeList(f, s));
