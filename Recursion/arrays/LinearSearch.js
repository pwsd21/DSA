const search = (arr, target, index) => {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    return index;
  } else {
    return search(arr, target, index + 1);
  }
};

// console.log(search([1, 4, 67, 8, 99, 86, 18], 4, 0));

// if we need to start from last to front

const lastSearch = (arr, target, index) => {
  if (index == -1) {
    return -1;
  }
  if (arr[index] == target) {
    return index;
  } else {
    return lastSearch(arr, target, index - 1);
  }
};

const ar = [2, 56, 8, 2, 67, 89, 4];

// console.log(lastSearch(ar, 89, ar.length - 1));

// return arrayList for multiple occurances of element

let finalArr = [];

const findElements = (arr, target, index) => {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    finalArr.push(index);
  }
  return findElements(arr, target, index + 1);
};

findElements([2, 4, 6, 78, 5, 5, 44], 5, 0);
// console.log(finalArr);

// OPTIMIZED WAY (MOST Preferred) -  return arrayList for multiple occurances of element (without using global object)

const findAllIndex = (arr, target, index, outputArray) => {
  if (index == arr.length) {
    return outputArray;
  }
  if (arr[index] === target) {
    outputArray.push(index);
  }
  return findAllIndex(arr, target, index + 1, outputArray);
};

// console.log(findAllIndex([2, 4, 6, 78, 5, 5, 44], 5, 0, []));

// Without paaing arrlist as an argument - declaring list inside body - NOT PREFERRED

const findAll = (arr, target, index) => {
  let list = [];
  if (index == arr.length) {
    return list;
  }
  if (arr[index] == target) {
    list.push(index);
  }
  let indexes = findAll(arr, target, index + 1);
  list.push(...indexes);
  return list;
};

console.log(findAll([2, 4, 6, 78, 5, 5, 44], 5, 0));
