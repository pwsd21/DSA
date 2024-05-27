function customQuickSort(arr, startChar) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    const comparison = compareStrings(arr[i], pivot, startChar);
    if (comparison < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...customQuickSort(left, startChar),
    pivot,
    ...customQuickSort(right, startChar),
  ];
}

function compareStrings(str1, str2, startChar) {
  const startsWithStartChar1 = str1.startsWith(startChar);
  const startsWithStartChar2 = str2.startsWith(startChar);

  if (startsWithStartChar1 && startsWithStartChar2) {
    return str1.localeCompare(str2);
  } else if (startsWithStartChar1) {
    return -1; // str1 comes before str2
  } else if (startsWithStartChar2) {
    return 1; // str2 comes before str1
  } else {
    return str1.localeCompare(str2);
  }
}

// Example usage:
const ARRSTR = ["apple", "banana", "cherry", "grape", "cat", "dog"];
const startChar = "c";

const sortedArray = customQuickSort(ARRSTR, startChar);
console.log(sortedArray);
