const bubbleSort = (arr, r, c) => {
  if (r == 0) {
    return;
  }

  if (c < r) {
    if (arr[c] > arr[c + 1]) {
      //swap
      let temp = arr[c];
      arr[c] = arr[c + 1];
      arr[c + 1] = temp;
    }
    bubbleSort(arr, r, c + 1);
  } else {
    bubbleSort(arr, r - 1, (c = 0));
  }
};

let arr = [4, 3, 1, 2];
bubbleSort(arr, arr.length - 1, 0);

console.log(arr);

// Selection sort

const sort = (arr, r, c, max) => {
  if (r == 0) {
    return;
  }

  if (c < r) {
    if (arr[c] > arr[max]) {
      sort(arr, r, c + 1, c);
    } else {
      sort(arr, r, c + 1, max);
    }
  } else {
    let temp = arr[max];
    arr[max] = arr[r - 1];
    arr[r - 1] = temp;
    sort(arr, r - 1, 0, 0);
  }
};

let arra = [4, 3, 1, 2];

sort(arra, 4, 0, 0);
console.log(arra);
