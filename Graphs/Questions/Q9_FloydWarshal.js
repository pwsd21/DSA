class Solution {
  shortestDistance(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === -1) {
          matrix[i][j] = 1e9;
        }
        if (i === j) {
          matrix[i][j] = 0;
        }
      }
    }

    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 1e9) {
          matrix[i][j] = -1;
        }
      }
    }
  }
}

const V = 4;
const matrix = [
  [-1, 2, -1, -1],
  [1, -1, 3, -1],
  [-1, -1, -1, -1],
  [3, 5, 4, -1],
];

const obj = new Solution();
obj.shortestDistance(matrix);

for (const row of matrix) {
  console.log(row.join(" "));
}
