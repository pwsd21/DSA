function alienLanguageOrder(dictionary, k) {
  const graph = new Map();

  // Initialize graph
  for (let i = 0; i < k; i++) {
    graph.set(i, new Set());
  }

  // Build graph
  for (let i = 0; i < dictionary.length - 1; i++) {
    const word1 = dictionary[i];
    const word2 = dictionary[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        graph
          .get(word1[j].charCodeAt(0) - "a".charCodeAt(0))
          .add(word2[j].charCodeAt(0) - "a".charCodeAt(0));
        break;
      }
    }
  }

  const visited = new Array(k).fill(false);
  const result = [];

  // Perform topological sort
  const topologicalSort = (node) => {
    visited[node] = true;
    for (const neighbor of graph.get(node)) {
      if (!visited[neighbor]) {
        topologicalSort(neighbor);
      }
    }
    result.unshift(String.fromCharCode(node + "a".charCodeAt(0)));
  };

  for (let i = 0; i < k; i++) {
    if (!visited[i]) {
      topologicalSort(i);
    }
  }

  return result.join("");
}

// Sample Input 1
const dictionary1 = ["a", "aa", "aaa"];
const k1 = 3;
console.log(alienLanguageOrder(dictionary1, k1)); // Output: 'a'

// Sample Input 2
const dictionary2 = ["caa", "aaa", "aab"];
const k2 = 3;
console.log(alienLanguageOrder(dictionary2, k2)); // Output: 'cab'
