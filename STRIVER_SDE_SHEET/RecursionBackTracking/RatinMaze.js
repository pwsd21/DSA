class Solution {
  constructor() {}

  findPathHelper(i, j, matrix, n, ans, move, visited) {
    // Base case: if reached the bottom-right cell, add the move to ans
    if (i === n - 1 && j === n - 1) {
      ans.push(move);
      return;
    }

    // Define the directions and their corresponding changes in coordinates
    const directions = [
      [1, 0, "D"],
      [0, -1, "L"],
      [0, 1, "R"],
      [-1, 0, "U"],
    ];

    // Iterate through the directions
    for (const [dx, dy, dir] of directions) {
      const ni = i + dx; // New row index
      const nj = j + dy; // New column index

      // Check if the new indices are within bounds, the cell is not visited, and it's a valid move
      if (
        ni >= 0 &&
        ni < n &&
        nj >= 0 &&
        nj < n &&
        !visited[ni][nj] &&
        matrix[ni][nj] === 1
      ) {
        visited[i][j] = 1; // Mark the current cell as visited
        this.findPathHelper(ni, nj, matrix, n, ans, move + dir, visited); // Recur with the new indices
        visited[i][j] = 0; // Backtrack: reset the visited status for the current cell
      }
    }
  }

  findPath(matrix, n) {
    const ans = [];
    const visited = Array.from({ length: n }, () => Array(n).fill(0)); // Initialize visited matrix

    // If the starting cell is reachable, call findPathHelper
    if (matrix[0][0] === 1) {
      this.findPathHelper(0, 0, matrix, n, ans, "", visited);
    }
    return ans;
  }
}

// Example usage:
const n = 4;
const m = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
const obj = new Solution();
const result = obj.findPath(m, n);

if (result.length === 0) {
  console.log(-1);
} else {
  for (const path of result) {
    console.log(path);
  }
}
