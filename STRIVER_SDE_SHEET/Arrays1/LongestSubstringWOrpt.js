// Function to find the length of the longest substring without repeating characters
function solve(str) {
  if (str.length === 0) return 0; // If string is empty, return 0

  let maxans = -Infinity; // Initialize maxans to negative infinity
  let setx = new Set(); // Create an empty set to store unique characters
  let l = 0; // Initialize left pointer to 0

  for (let r = 0; r < str.length; r++) {
    // Outer loop for traversing the string
    if (setx.has(str[r])) {
      // If duplicate element is found
      while (l < r && setx.has(str[r])) {
        // Loop to remove characters until no duplicates are found
        setx.delete(str[l]); // Remove character at left pointer from set
        l += 1; // Increment left pointer
      }
    }
    setx.add(str[r]); // Add current character to the set
    maxans = Math.max(maxans, r - l + 1); // Update maxans with maximum length
  }
  return maxans; // Return the length of the longest substring without repeating characters
}

let str = "takeUforward"; // Input string
console.log(
  "The length of the longest substring without repeating characters is",
  solve(str)
); // Output the result
