function median(a, b) {
  let n1 = a.length,
    n2 = b.length;
  // If n1 is bigger, swap the arrays to ensure binary search on the smaller array:
  if (n1 > n2) return median(b, a);

  let n = n1 + n2; // Total length of the combined arrays
  let left = Math.floor((n1 + n2 + 1) / 2); // Length of the left half of the combined arrays

  // Apply binary search on the smaller array 'a':
  let low = 0,
    high = n1;
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2); // Midpoint of array 'a'
    let mid2 = left - mid1; // Corresponding midpoint of array 'b'

    // Calculate values for left and right partitions of arrays 'a' and 'b':
    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER; // Initialize left partition values to negative infinity
    let r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER; // Initialize right partition values to positive infinity
    if (mid1 < n1) r1 = a[mid1]; // If 'a' has elements to the right of mid1, update r1
    if (mid2 < n2) r2 = b[mid2]; // If 'b' has elements to the right of mid2, update r2
    if (mid1 - 1 >= 0) l1 = a[mid1 - 1]; // If 'a' has elements to the left of mid1, update l1
    if (mid2 - 1 >= 0) l2 = b[mid2 - 1]; // If 'b' has elements to the left of mid2, update l2

    // Check if the partitions satisfy the condition for median:
    if (l1 <= r2 && l2 <= r1) {
      // If the total length is odd, return the maximum of left partitions
      if (n % 2 === 1) return Math.max(l1, l2);
      // If the total length is even, return the average of maximum of left and minimum of right partitions
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    }

    // Eliminate the halves:
    else if (l1 > r2)
      high =
        mid1 - 1; // If l1 is greater than r2, eliminate the right half of 'a'
    else low = mid1 + 1; // Otherwise, eliminate the left half of 'a'
  }

  return 0; // Dummy return statement
}

let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));
