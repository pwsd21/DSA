var wordBreak = function (s, wordDict) {
  // Initialize an array to store the resulting combinations
  let ans = [];
  // Initialize an array to temporarily store the current combination being formed
  let words = [];

  // Backtracking function to explore all possible combinations
  const backTrack = function (start) {
    // Base case: if the start index reaches the end of the string
    if (start === s.length) {
      // Add the current combination to the result array
      ans.push(words.join(" "));
      return;
    }
    // Iterate through the string starting from the current index
    for (let i = start; i < s.length; i++) {
      // Extract the substring from the start index to the current index
      let word = s.substring(start, i + 1);
      // Check if the substring exists in the word dictionary
      if (!wordDict.includes(word)) continue;
      // If the substring is a valid word, add it to the current combination
      words.push(word);
      // Recursively explore the remaining substring starting from the next index
      backTrack(i + 1);
      // Backtrack by removing the last word to explore other possibilities
      words.pop();
    }
  };

  // Start the backtracking process from the beginning of the string
  backTrack(0);
  // Return the resulting combinations
  return ans;
};
