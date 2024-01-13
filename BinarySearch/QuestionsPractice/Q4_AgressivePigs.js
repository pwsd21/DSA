const aggressivePigs = (stalls, k) => {
  const arr = stalls.sort((a, b) => a - b);
  let start = 1;
  let end = arr[arr.length - 1] - arr[0];
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (canWePlacePigs(stalls, mid, k) === true) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

const canWePlacePigs = (stalls, dist, pigs) => {
  let count = 1;
  last = stalls[0];
  for (let i = 0; i < stalls.length; i++) {
    if (stalls[i] - last >= dist) {
      count++;
      last = stalls[i];
    }
    if (count >= pigs) return true;
  }
  return false;
};

console.log(aggressivePigs([0, 3, 4, 7, 10, 9], 4));
