const PeakMountain = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // remember not to keep <= in biotonic array
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start; // can return either start or end
};

console.log(PeakMountain([1, 2, 4, 5, 7, 99, 6, 3, 2]));
