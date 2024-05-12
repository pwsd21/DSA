// 3 color dutch partition

const sortColors = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
