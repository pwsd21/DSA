const minEatingSpeed = (piles, h) => {
  let start = 1;
  let end = max(piles);
  let ans = Number.MAX_SAFE_INTEGER;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    let hoursTaken = CalulateHours(piles, mid);

    if (hoursTaken <= h) {
      ans = Math.min(ans, mid);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

let maxValue = 0;
const max = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

const CalulateHours = (piles, mid) => {
  let sum = 0;
  for (let i = 0; i < piles.length; i++) {
    sum = sum + Math.ceil(piles[i] / mid);
  }
  return sum;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
