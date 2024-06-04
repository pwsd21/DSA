const sqrt = (x) => {
  let start = 0;
  let end = x;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (mid * mid > x) {
      end = mid - 1;
    } else if (mid * mid < x) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return end;
};

console.log(sqrt(8));
console.log(sqrt(12));
