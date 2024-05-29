function rotate(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  // Swapping the elements at (i, j) with (j, i)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row of the matrix
  // This completes the 90-degree rotation
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
