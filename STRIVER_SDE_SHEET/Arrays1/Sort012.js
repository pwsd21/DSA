// Function to sort an array containing 0s, 1s, and 2s using the Dutch National Flag algorithm
const sortColors = (arr) => {
  // Initialize three pointers
  let low = 0; // Pointer for the position of the next 0
  let mid = 0; // Pointer for the current element being examined
  let high = arr.length - 1; // Pointer for the position of the next 2

  // Iterate through the array until mid pointer crosses high pointer
  while (mid <= high) {
    if (arr[mid] === 0) {
      // If the current element is 0, swap it with the element at low pointer
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      // Increment both low and mid pointers
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      // If the current element is 1, just move the mid pointer to the next element
      mid++;
    } else {
      // If the current element is 2, swap it with the element at high pointer
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      // Decrement the high pointer
      high--;
    }
  }

  // Return the sorted array
  return arr;
};

// Test the function with an example array
console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output should be [0, 0, 1, 1, 2, 2]
