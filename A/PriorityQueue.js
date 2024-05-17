class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Function to insert an element with priority into the priority queue
  insert(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // Sort based on priority
  }

  // Function to remove and return the element with the highest priority
  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().value; // Remove and return element with lowest priority
  }

  // Function to check if the priority queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.insert("Task 1", 5);
pq.insert("Task 2", 3);
pq.insert("Task 3", 8);
pq.insert("Task 4", 1);

while (!pq.isEmpty()) {
  console.log(pq.extractMin()); // Output: "Task 4", "Task 2", "Task 1", "Task 3"
}
