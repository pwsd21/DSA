// Brute Force
// TC - 2 O(m*n)
// SC - O(m)+O(n)
function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const row = new Array(n).fill(0); // row array
  const col = new Array(m).fill(0); // col array

  // Traverse the matrix:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // mark ith index of row with 1:
        row[i] = 1;
        // mark jth index of col with 1:
        col[j] = 1;
      }
    }
  }

  // Finally, mark all (i, j) as 0 if row[i] or col[j] is marked with 1.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
  console.log(row.join(" "));
}

// Optimal Solution
