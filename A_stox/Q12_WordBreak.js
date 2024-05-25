var wordBreak = function (s, wordDict) {
  // Initialize an array to track whether substrings of s ending at index i can be segmented into words
  let table = new Array(s.length + 1).fill(false);

  // Base case: an empty string can always be segmented
  table[0] = true;

  // Iterate through each index i of the string s
  for (let i = 0; i <= s.length; i++) {
    // If the substring ending at index i can be segmented
    if (table[i] === true) {
      // Iterate through each word in the dictionary
      for (let word of wordDict) {
        // Check if the word matches the substring starting at index i
        if (s.slice(i, i + word.length) === word) {
          // Mark the substring ending at index i + word.length as segmentable
          table[i + word.length] = true;
        }
      }
    }
  }
  // Return whether the entire string s can be segmented into words from the dictionary
  return table[s.length];
};
