function searchMatrix(matrix, target) {
  // Get the number of rows (n) and columns (m) in the matrix
  let n = matrix.length;
  let m = matrix[0].length;

  // Apply binary search
  let start = 0,
    end = n * m - 1; // Initialize start and end pointers
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // Calculate the middle index
    let row = Math.floor(mid / m); // Calculate the row index of the middle element
    let col = mid % m; // Calculate the column index of the middle element

    // Check if the middle element is equal to the target
    if (matrix[row][col] === target) return true;
    // If the middle element is less than the target, search in the right half
    else if (matrix[row][col] < target) start = mid + 1;
    // If the middle element is greater than the target, search in the left half
    else end = mid - 1;
  }
  // If the target is not found, return false
  return false;
}

// Test the function with an example matrix and target
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let result = searchMatrix(matrix, 8); // Search for the target value 8
console.log(result ? "true" : "false"); // Print the result as "true" if found, "false" otherwise
