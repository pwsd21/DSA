const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};

const medianArray = (arr1, arr2) => {
  const mergedArray = merge(arr1, arr2);
  let start = 0;
  let end = mergedArray.length - 1;
  const mid = start + Math.floor((end - start) / 2);
  if (mergedArray.length % 2 != 0) {
    return mergedArray[mid];
  } else {
    return (mergedArray[mid] + mergedArray[mid + 1]) / 2;
  }
};

console.log(medianArray([1, 2], [3, 4]));
