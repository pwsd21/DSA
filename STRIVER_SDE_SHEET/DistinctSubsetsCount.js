// Returns 2 ^ n
function subsetCount(arr, n) {
  return 1 << n;
}

// Driver code
let A = [1, 2, 3];
let n = A.length;
document.write(subsetCount(A, n));

// Duplicates - version handle
// Function to find the count of distinct subsets
function subsetCount(arr) {
  // Create a Set to remove duplicates
  let uniqueElements = new Set(arr);
  // Get the number of unique elements
  let n = uniqueElements.size;
  // Return 2^n (number of distinct subsets)
  return 1 << n; // This is equivalent to Math.pow(2, n)
}

// Driver code
let A1 = [1, 2, 3, 2, 1];
let result = subsetCount(A);
document.write(result);
