function numDistinctIslands(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Array(rows).fill().map(() => new Array(cols).fill(false));
  const distinctIslands = new Set();

  // DFS to traverse the islands
  const dfs = (row, col, shape) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0 ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = true;
    shape.push(`${row}-${col}`);

    // Explore in all four directions
    dfs(row + 1, col, shape);
    dfs(row - 1, col, shape);
    dfs(row, col + 1, shape);
    dfs(row, col - 1, shape);
  };

  // Traverse the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1 && !visited[row][col]) {
        const shape = [];
        dfs(row, col, shape);

        // Normalize the shape by setting the top-left cell as (0, 0)
        const normalizedShape = shape.map((position) => {
          const [r, c] = position.split("-");
          return [parseInt(r) - row, parseInt(c) - col];
        });

        // Sort the normalized shape to create a unique signature
        const signature = JSON.stringify(normalizedShape.sort());

        // Add the unique signature to the set
        distinctIslands.add(signature);
      }
    }
  }

  return distinctIslands.size;
}

// Sample Input 1
const grid1 = [
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
];

console.log(numDistinctIslands(grid1)); // Output: 3

// Sample Input 2
const grid2 = [
  [1, 0],
  [0, 1],
  [1, 1],
];

console.log(numDistinctIslands(grid2)); // Output: 2
