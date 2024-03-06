class DisjointSet {
  constructor(n) {
    this.rank = new Array(n + 1).fill(0);
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.size = new Array(n + 1).fill(1);
  }

  findUPar(node) {
    if (node === this.parent[node]) return node;
    return (this.parent[node] = this.findUPar(this.parent[node]));
  }

  unionByRank(u, v) {
    const ulp_u = this.findUPar(u);
    const ulp_v = this.findUPar(v);
    if (ulp_u === ulp_v) return;
    if (this.rank[ulp_u] < this.rank[ulp_v]) {
      this.parent[ulp_u] = ulp_v;
    } else if (this.rank[ulp_v] < this.rank[ulp_u]) {
      this.parent[ulp_v] = ulp_u;
    } else {
      this.parent[ulp_v] = ulp_u;
      this.rank[ulp_u]++;
    }
  }

  unionBySize(u, v) {
    const ulp_u = this.findUPar(u);
    const ulp_v = this.findUPar(v);
    if (ulp_u === ulp_v) return;
    if (this.size[ulp_u] < this.size[ulp_v]) {
      this.parent[ulp_u] = ulp_v;
      this.size[ulp_v] += this.size[ulp_u];
    } else {
      this.parent[ulp_v] = ulp_u;
      this.size[ulp_u] += this.size[ulp_v];
    }
  }
}

class Solution {
  spanningTree(V, adj) {
    const edges = [];
    for (let i = 0; i < V; i++) {
      for (const [adjNode, wt] of adj[i]) {
        const node = i;
        edges.push([wt, [node, adjNode]]);
      }
    }

    const ds = new DisjointSet(V);
    edges.sort((a, b) => a[0] - b[0]);

    let mstWt = 0;
    for (const [wt, [u, v]] of edges) {
      if (ds.findUPar(u) !== ds.findUPar(v)) {
        mstWt += wt;
        ds.unionBySize(u, v);
      }
    }

    return mstWt;
  }
}

const V = 5;
const edges = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 2, 1],
  [2, 3, 2],
  [3, 4, 1],
  [4, 2, 2],
];
const adj = Array.from({ length: V }, () => []);

for (const [u, v, wt] of edges) {
  adj[u].push([v, wt]);
  adj[v].push([u, wt]);
}

const obj = new Solution();
const mstWt = obj.spanningTree(V, adj);
console.log("The sum of all the edge weights:", mstWt);
