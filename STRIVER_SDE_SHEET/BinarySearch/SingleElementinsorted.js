function singleNonDuplicate(arr) {
  let n = arr.length; // Size of the array

  // Edge cases:
  if (n === 1) return arr[0]; // If there's only one element in the array, it's the single non-duplicate
  if (arr[0] !== arr[1]) return arr[0]; // If the first two elements are different, the first element is the single non-duplicate
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1]; // If the last two elements are different, the last element is the single non-duplicate

  let low = 1,
    high = n - 2; // Initialize pointers for binary search excluding edge elements
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Calculate middle index

    // If arr[mid] is the single element:
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return arr[mid]; // Return the single non-duplicate element
    }

    // If we are in the left:
    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      // Eliminate the left half:
      low = mid + 1; // Move the low pointer to the right half
    } else {
      // Eliminate the right half:
      high = mid - 1; // Move the high pointer to the left half
    }
  }

  // Dummy return statement:
  return -1; // This line should never be reached in a valid input scenario
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);
