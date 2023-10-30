// Ceiling of a given Number

const Ceiling = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return start; // this is main notice point here, rest all is similar to normal binary search
};

const array = [2, 3, 4, 6, 8, 9, 24, 28, 36];
const target = 23;

console.log(Ceiling(array, target));
