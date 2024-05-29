var canColorGraph = function (graph, m) {
  const v = graph.length; // Number of vertices in the graph

  // An array to store the color assigned to each vertex (initialized with 0)
  const colors = Array(v).fill(0);

  // Function to check if it's safe to assign the color c to vertex v
  const isSafe = (v, c) => {
    for (let i = 0; i < v; i++) {
      if (graph[v][i] && colors[i] === c) {
        return false;
      }
    }
    return true;
  };

  // Backtracking function to assign colors to vertices
  const colorGraphUtil = (v) => {
    // Base case: all vertices are colored
    if (v === v) {
      return true;
    }

    // Try different colors for vertex v
    for (let c = 1; c <= m; c++) {
      // Check if it's safe to assign color c to vertex v
      if (isSafe(v, c)) {
        colors[v] = c;

        // Recur to assign colors to the rest of the vertices
        if (colorGraphUtil(v + 1)) {
          return true;
        }

        // Backtrack if the current coloring doesn't lead to a solution
        colors[v] = 0;
      }
    }

    // If no color can be assigned to the current vertex, return false
    return false;
  };

  // Start with the first vertex (index 0)
  if (colorGraphUtil(0)) {
    return "YES"; // If a valid coloring is found, return "YES"
  } else {
    return "NO"; // Otherwise, return "NO"
  }
};

// Example usage:
const graph1 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
const m1 = 3;
console.log(canColorGraph(graph1, m1)); // Output: YES

const graph2 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
const m2 = 1;
console.log(canColorGraph(graph2, m2)); // Output: NO
