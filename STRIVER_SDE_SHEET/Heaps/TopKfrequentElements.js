var topKFrequent = function (nums, k) {
  // Map to store frequency of each number
  const freqMap = new Map();
  // Array of sets to store numbers with the same frequency
  const bucket = [];
  // Result array to store top k frequent elements
  const result = [];

  // Count frequencies of each number
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Place numbers in corresponding frequency buckets
  for (let [num, freq] of freqMap) {
    // Create a set if not exists for the frequency
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  // Iterate from higher frequency buckets to lower
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      // Add numbers from the bucket to result
      result.push(...bucket[i]);
      // Break if k elements have been added
      if (result.length === k) {
        break;
      }
    }
  }

  // Return the top k frequent elements
  return result;
};
