// Brute force
const mazeCount = (r, c) => {
  if (r == 1 || c == 1) {
    return 1;
  }

  let left = mazeCount(r - 1, c);
  let right = mazeCount(r, c - 1);
  return left + right;
};

// Optimal

function uniquePaths(m, n) {
  // Initialize an array to store the number of paths for each column
  let memo = new Array(n).fill(1);
  // Iterate over each row starting from the second row
  for (let i = 1; i < m; i++) {
    const a = []; // Temporary array to store the updated number of paths
    // Iterate over each column
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        // For the first column, the number of paths is the same as the previous row's first column
        a[j] = memo[j];
      } else {
        // For other columns, the number of paths is the sum of the paths from the left and the paths from above
        a[j] = a[j - 1] + memo[j];
      }
    }
    // Update the memo array with the updated number of paths for the current row
    memo = a;
  }
  // Return the number of paths for the last column of the last row
  return memo.pop();
}
