const nextGreatestLetter = (letters, target) => {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    target < letters[mid] ? (end = mid - 1) : (start = mid + 1);
  }
  return letters[start % letters.length];
};

console.log(nextGreatestLetter(["c", "f", "h", "m", "u", "y"], "v"));
