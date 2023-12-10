const Sorted = (arr, index) => {
  if (index == arr.length - 1) {
    return true;
  }
  return arr[index] < arr[index + 1] && Sorted(arr, index + 1);
};

console.log(Sorted([1, 3, 5, 7, 9], 0));
