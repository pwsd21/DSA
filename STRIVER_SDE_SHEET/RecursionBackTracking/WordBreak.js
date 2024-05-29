const wordBreak = (s, wordDict, memo = {}) => {
  // Default arg which is our memo object #####
  // We break down the word each recursive call
  // Base case is the broken down word becomes an empty string, which means we found a path
  if (!s) return true;
  if (s in memo) return memo[s]; // Base case to avoid extra computation #####
  // ^^ Will be hit if we already computated this word

  // We need to loop everyword in the wordDict
  for (let word of wordDict) {
    // indexOf will give us the prefix START of the word we pass in
    // So if s.indexOf(word) is 0, we know the word is the prefix
    if (s.indexOf(word) === 0) {
      // If they match, we continue our recursion
      // We pass in the NEW s with the word sliced from the prefix, we also need to pass wordDict
      // If we ever hit our base case, this will evaluate to true and return true overall
      if (wordBreak(s.slice(word.length), wordDict, memo)) {
        // Remeber to pass down memo #####
        memo[s] = true; // Save our computation #####
        return true;
      }
    }
  }

  // If we never make it to a base case, we have no answers
  memo[s] = false; // Save our computation #####
  return false;
};
