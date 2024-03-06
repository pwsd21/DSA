var leastInterval = function (tasks, n) {
  // Create a frequency array to keep track of the count of each task
  const freq = Array(26).fill(0);
  for (const task of tasks) {
    freq[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }
  // Sort the frequency array in non-decreasing order
  freq.sort((a, b) => a - b);
  // Calculate the maximum frequency of any task
  const maxFreq = freq[25] - 1;
  // Calculate the number of idle slots that will be required
  let idleSlots = maxFreq * n;
  // Iterate over the frequency array from the second highest frequency to the lowest frequency
  for (let i = 24; i >= 0 && freq[i] > 0; i--) {
    // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
    idleSlots -= Math.min(maxFreq, freq[i]);
  }
  // If there are any idle slots left, add them to the total number of tasks
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};
