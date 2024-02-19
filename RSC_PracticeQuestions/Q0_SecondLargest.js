const secondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargest([12, 35, 1, 10, 34, 22]));

// -------------------------------------------------------------------- PREFERED APPROACH

const secondLargestElement = (arr) => {
  if (arr.length < 2) {
    return "Array should have at least two elements.";
  }

  let largest = arr[0];
  let secondLargest = arr[1];

  // Ensure largest and secondLargest are correctly ordered
  if (largest < secondLargest) {
    [largest, secondLargest] = [secondLargest, largest];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(secondLargestElement([12, 35, 1, 10, 34, 22])); // Output: 34
