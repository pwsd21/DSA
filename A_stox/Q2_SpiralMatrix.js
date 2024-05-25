var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  const res = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++; // Move the top boundary down

    // Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--; // Move the right boundary left

    if (top <= bottom) {
      // Traverse from right to left along the bottom row
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--; // Move the bottom boundary up
    }

    if (left <= right) {
      // Traverse from bottom to top along the left column
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++; // Move the left boundary right
    }
  }

  return res;
};
