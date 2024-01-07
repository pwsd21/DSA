class Graph {
  constructor() {
    this.adjacenceyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenceyList[vertex]) {
      this.adjacenceyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacenceyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacenceyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacenceyList[vertex1].add(vertex2);
    this.adjacenceyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacenceyList) {
      console.log(vertex + "->" + [...this.adjacenceyList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacenceyList[vertex1].has(vertex2) &&
      this.adjacenceyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacenceyList[vertex1].delete(vertex2);
    this.adjacenceyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacenceyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacenceyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacenceyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("B", "A"));
console.log("--------------------");
graph.removeEdge("A", "B");
graph.display();
console.log("--------------------");

graph.removeVertex("A");
graph.display();
