function merge(arr1, arr2, n, m) {
  // Declare two pointers: left for arr1 and right for arr2
  let left = n - 1;
  let right = 0;

  // Swap the elements until arr1[left] is smaller than arr2[right]
  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      // If the element in arr1 is greater than the element in arr2,
      // swap them and move the pointers inward
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]]; // Swap elements
      left--; // Move left pointer to the left
      right++; // Move right pointer to the right
    } else {
      // If the element in arr1 is smaller than or equal to the element in arr2,
      // break out of the loop
      break;
    }
  }

  // Sort arr1[] and arr2[] individually
  arr1.sort((a, b) => a - b); // Sort arr1 in ascending order
  arr2.sort((a, b) => a - b); // Sort arr2 in ascending order
}

// Test the function with example arrays
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4,
  m = 3;
merge(arr1, arr2, n, m);

// Print the merged arrays
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(" "));
console.log("arr2[] = " + arr2.join(" "));
