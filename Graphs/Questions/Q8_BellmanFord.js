class Solution {
  bellmanFord(V, edges, S) {
    const dist = Array(V).fill(1e8);
    dist[S] = 0;

    for (let i = 0; i < V - 1; i++) {
      for (const it of edges) {
        const u = it[0];
        const v = it[1];
        const wt = it[2];

        if (dist[u] !== 1e8 && dist[u] + wt < dist[v]) {
          dist[v] = dist[u] + wt;
        }
      }
    }

    // Nth relaxation to check negative cycle
    for (const it of edges) {
      const u = it[0];
      const v = it[1];
      const wt = it[2];

      if (dist[u] !== 1e8 && dist[u] + wt < dist[v]) {
        return [-1];
      }
    }

    return dist;
  }
}

const V = 6;
const edges = [
  [3, 2, 6],
  [5, 3, 1],
  [0, 1, 5],
  [1, 5, -3],
  [1, 2, -2],
  [3, 4, -2],
  [2, 4, 3],
];

const S = 0;
const obj = new Solution();
const dist = obj.bellmanFord(V, edges, S);

console.log(dist.join(" "));
