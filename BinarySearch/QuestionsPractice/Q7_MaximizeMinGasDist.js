const minDistToGasStations = (n, k, arr) => {
  let start = 0;
  let end = arr[arr.length - 1] - arr[0];

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    let newStations = 0;

    for (let i = 1; i < n; i++) {
      const gap = arr[i] - arr[i - 1];

      newStations += Math.ceil(gap / mid) - 1;
    }

    if (newStations > k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start; // here start === end
};
