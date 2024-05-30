const root = (N, M) => {
  let start = 1; // Initialize the starting point of the binary search
  let end = M; // Initialize the ending point of the binary search
  while (start <= end) {
    // Continue the search while the range is valid
    const mid = start + Math.floor((end - start) / 2); // Calculate the mid-point
    if (Math.pow(mid, N) === M) {
      // Check if mid raised to the power N equals M
      return mid; // If true, mid is the Nth root of M
    } else if (Math.pow(mid, N) > M) {
      // If mid^N is greater than M
      end = mid - 1; // Adjust the end point to narrow the search range
    } else {
      // If mid^N is less than M
      start = mid + 1; // Adjust the start point to narrow the search range
    }
  }
  return -1; // If no integer root is found, return -1
};

console.log(root(4, 69)); // Output the 4th root of 69 (expected -1, as 69 is not a perfect 4th power)
console.log(root(3, 27)); // Output the 3rd root of 27 (expected 3, as 3^3 = 27)
