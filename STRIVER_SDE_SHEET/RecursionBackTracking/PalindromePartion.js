var partition = function (s) {
  // Initialize an array to store the resulting partitions
  let result = [];

  // Helper function to check if a string is a palindrome
  const isPalindrome = (str) => {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  // Define a depth-first search function using backtracking
  const dfsBacktracking = (s, path) => {
    // Base case: if the current string is empty, add the current partition to the result
    if (s.length === 0) {
      result.push([...path]);
      return;
    }

    // Iterate over possible partition lengths
    for (let i = 1; i <= s.length; i++) {
      // Get the substring of length i
      let partition = s.substring(0, i);
      // If the substring is a palindrome, recursively generate partitions for the remaining string
      if (isPalindrome(partition)) {
        path.push(partition);
        dfsBacktracking(s.substring(i), path);
        path.pop(); // backtrack: remove the last partition added
      }
    }
  };

  // Start the depth-first search with backtracking using an empty partition and the input string
  dfsBacktracking(s, []);

  // Return the resulting partitions
  return result;
};
