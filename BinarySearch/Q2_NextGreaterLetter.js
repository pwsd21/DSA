const nextGreatestLetter = (letters, target) => {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
  // const index = start >= letters.length ? 0 : start;
  // return letters[index];
};

console.log(nextGreatestLetter(["c", "f", "h", "m", "u", "y"], "i"));
