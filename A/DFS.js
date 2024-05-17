function dfs(graph, visited, vertex) {
  visited[vertex] = true;
  console.log(vertex);

  // Iterate over adjacent vertices
  for (let i = 0; i < graph.length; i++) {
    if (graph[vertex][i] === 1 && !visited[i]) {
      dfs(graph, visited, i);
    }
  }
}

function dfsTraversal(graph) {
  const visited = new Array(graph.length).fill(false);

  // Perform DFS traversal for each vertex if not visited
  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      dfs(graph, visited, i);
    }
  }
}

// Example graph represented by an adjacency matrix
const GRAPH = [
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
];

console.log("DFS Traversal:");
dfsTraversal(GRAPH);
