function upperBound(arr, x, n) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // If the middle element is greater than x, it could be a potential upper bound
    if (arr[mid] > x) {
      ans = mid; // Update the answer to the current mid
      high = mid - 1; // Look for a smaller index on the left
    } else {
      low = mid + 1; // Otherwise, look on the right
    }
  }
  return ans; // Return the index of the upper bound
}

function countSmallEqual(matrix, m, n, x) {
  let cnt = 0;
  // Count the number of elements less than or equal to x in each row
  for (let i = 0; i < m; i++) {
    cnt += upperBound(matrix[i], x, n);
  }
  return cnt; // Return the total count
}

function median(matrix, m, n) {
  let low = Number.MAX_SAFE_INTEGER,
    high = Number.MIN_SAFE_INTEGER;

  // Find the minimum and maximum elements in the matrix
  for (let i = 0; i < m; i++) {
    low = Math.min(low, matrix[i][0]);
    high = Math.max(high, matrix[i][n - 1]);
  }

  // The number of elements needed to find the median
  let req = Math.floor((n * m) / 2);

  // Perform binary search on the range of possible values
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // Count how many elements are less than or equal to mid
    let smallEqual = countSmallEqual(matrix, m, n, mid);
    // If the count is less than or equal to the required number, search in the upper half
    if (smallEqual <= req) {
      low = mid + 1;
    } else {
      // Otherwise, search in the lower half
      high = mid - 1;
    }
  }
  return low; // The low value will be the median after the loop ends
}

const matrix = [
  [1, 2, 3, 4, 5],
  [8, 9, 11, 12, 13],
  [21, 23, 25, 27, 29],
];
const m = matrix.length;
const n = matrix[0].length;
const ans = median(matrix, m, n);
console.log("The median element is: " + ans);
