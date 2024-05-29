// Function to find the length of the longest consecutive sequence in an array
function longestSuccessiveElements(a) {
  let n = a.length;
  if (n === 0) return 0; // If array is empty, return 0

  let longest = 1; // Initialize the length of the longest consecutive sequence to 1
  let st = new Set(); // Create a set to store unique elements from the array

  // Put all the array elements into the set
  for (let i = 0; i < n; i++) {
    st.add(a[i]);
  }

  // Find the longest sequence
  for (let it of st) {
    // If 'it' is a starting number of a sequence
    if (!st.has(it - 1)) {
      // Find consecutive numbers
      let cnt = 1; // Initialize count to 1
      let x = it; // Initialize x to the starting number
      while (st.has(x + 1)) {
        x = x + 1; // Increment x
        cnt = cnt + 1; // Increment count
      }
      longest = Math.max(longest, cnt); // Update longest with maximum count
    }
  }
  return longest; // Return the length of the longest consecutive sequence
}

let a = [100, 200, 1, 2, 3, 4]; // Input array
let ans = longestSuccessiveElements(a); // Call the function
console.log("The longest consecutive sequence is", ans); // Output the result
