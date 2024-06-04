const minimax = (arr, k) => {
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    start = Math.max(start, arr[i]);
    end += arr[i];
  }

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    let sum = 0;
    let pieces = 1;
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        sum = arr[i];
        pieces++;
      } else {
        sum += arr[i];
      }
    }

    if (pieces > k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

console.log(minimax([7, 2, 5, 10, 8], 2));
