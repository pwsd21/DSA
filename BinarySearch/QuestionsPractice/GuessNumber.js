const GuessNumber = (n) => {
  let start = 1;
  let end = n;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    let result = guess(n);
    if (mid > result) {
      return -1;
    } else if (mid < result) {
      return 1;
    } else {
      return 0;
    }
  }
  return start;
};

console.log(GuessNumber(10));
