const splitArray = (arr, k) => {
  let start = 0; // Initialize the start pointer
  let end = 0; // Initialize the end pointer

  // Find the maximum value and sum of the array
  for (let i = 0; i < arr.length; i++) {
    start = Math.max(start, arr[i]); // Update start with the maximum value in the array
    end += arr[i]; // Calculate the sum of the array
  }

  // Perform binary search
  while (start < end) {
    // Try middle as potential answer
    let mid = start + Math.floor((end - start) / 2);

    // Calculate how many pieces you can divide the array into with this maximum sum
    let sum = 0; // Initialize sum for the current piece
    let pieces = 1; // Initialize the number of pieces
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        // If adding the next element exceeds the maximum sum
        sum = arr[i]; // Start a new piece with the current element
        pieces++; // Increment the number of pieces
      } else {
        sum += arr[i]; // Add the current element to the current piece
      }
    }

    // Adjust the search range based on the number of pieces
    if (pieces > k) {
      start = mid + 1; // If the number of pieces exceeds the target 'k', increase the start pointer
    } else {
      end = mid; // If the number of pieces does not exceed 'k', decrease the end pointer
    }
  }

  return start; // Return the minimum sum among the valid splits
};

console.log(splitArray([7, 2, 5, 10, 8], 2)); // Output: 18
