function printPairs(arr, n) {
  let hs = new Set();
  for (let i = 0; i < n; i++) {
    if (hs.has(arr[i] * -1)) {
      if (arr[i] < 0) {
        console.log(arr[i], arr[i] * -1);
      } else {
        console.log(arr[i] * -1, arr[i]);
      }
    }
    hs.add(arr[i]);
  }
}
