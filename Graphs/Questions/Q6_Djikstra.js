class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Array(vertices).fill().map(() => []);
  }

  addEdge(u, v, w) {
    this.adjList[u].push({ node: v, weight: w });
    this.adjList[v].push({ node: u, weight: w });
  }

  dijkstra(source) {
    const dist = new Array(this.vertices).fill(Infinity);
    const visited = new Array(this.vertices).fill(false);

    dist[source] = 0;

    for (let i = 0; i < this.vertices - 1; i++) {
      const u = this.minDistance(dist, visited);
      visited[u] = true;

      for (const neighbor of this.adjList[u]) {
        const v = neighbor.node;
        const weight = neighbor.weight;

        if (!visited[v] && dist[u] !== Infinity && dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
        }
      }
    }

    return dist;
  }

  minDistance(dist, visited) {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < this.vertices; v++) {
      if (!visited[v] && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }

    return minIndex;
  }
}

function shortestPathDistances(n, m, s, edges) {
  const graph = new Graph(n);

  for (const edge of edges) {
    const u = edge[0];
    const v = edge[1];
    const w = edge[2];
    graph.addEdge(u, v, w);
  }

  const distances = graph.dijkstra(s);
  return distances;
}

// Sample Input 1
const n1 = 5;
const m1 = 7;
const s1 = 0;
const edges1 = [
  [0, 1, 7],
  [0, 2, 1],
  [0, 3, 2],
  [1, 2, 3],
  [1, 3, 5],
  [1, 4, 1],
  [3, 4, 7],
];
console.log(shortestPathDistances(n1, m1, s1, edges1)); // Output: [0, 4, 1, 2, 5]

// Sample Input 2
const n2 = 3;
const m2 = 3;
const s2 = 2;
const edges2 = [
  [1, 0, 9],
  [2, 1, 8],
  [0, 2, 4],
];
console.log(shortestPathDistances(n2, m2, s2, edges2)); // Output: [4, 8, 0]
