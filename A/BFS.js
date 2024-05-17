function bfs(graph, start) {
  const visited = new Array(graph.length).fill(false);
  const queue = [];

  visited[start] = true;
  queue.push(start);

  while (queue.length !== 0) {
    const vertex = queue.shift();
    console.log(vertex);

    for (let i = 0; i < graph[vertex].length; i++) {
      const neighbor = graph[vertex][i];
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

// Example graph represented by an adjacency list
const GRAPH = [
  [1, 2], // Neighbors of vertex 0
  [0, 3], // Neighbors of vertex 1
  [0, 4], // Neighbors of vertex 2
  [1], // Neighbors of vertex 3
  [2], // Neighbors of vertex 4
];

console.log("BFS Traversal:");
bfs(GRAPH, 0);
