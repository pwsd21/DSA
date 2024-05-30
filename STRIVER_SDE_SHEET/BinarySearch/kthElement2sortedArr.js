function kthElement(a, b, m, n, k) {
  // If array 'a' has more elements than array 'b', swap them and adjust parameters
  if (m > n) return kthElement(b, a, n, m, k);

  let left = k; // Length of the left half of combined arrays

  // Apply binary search on array 'a':
  let low = Math.max(0, k - n),
    high = Math.min(k, m); // Define search range based on 'k' and lengths of arrays
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2); // Midpoint of array 'a'
    let mid2 = left - mid1; // Corresponding midpoint of array 'b'

    // Calculate values for left and right partitions of arrays 'a' and 'b':
    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER; // Initialize left partition values to negative infinity
    let r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER; // Initialize right partition values to positive infinity
    if (mid1 < m) r1 = a[mid1]; // If 'a' has elements to the right of mid1, update r1
    if (mid2 < n) r2 = b[mid2]; // If 'b' has elements to the right of mid2, update r2
    if (mid1 - 1 >= 0) l1 = a[mid1 - 1]; // If 'a' has elements to the left of mid1, update l1
    if (mid2 - 1 >= 0) l2 = b[mid2 - 1]; // If 'b' has elements to the left of mid2, update l2

    // Check if the partitions satisfy the condition for the k-th element:
    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2); // Return the maximum of left partition values
    }

    // Eliminate the halves:
    else if (l1 > r2)
      high =
        mid1 - 1; // If l1 is greater than r2, eliminate the right half of 'a'
    else low = mid1 + 1; // Otherwise, eliminate the left half of 'a'
  }
  return 0; // Dummy return statement
}

let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log(
  "The k-th element of two sorted arrays is: " +
    kthElement(a, b, a.length, b.length, 5)
);
