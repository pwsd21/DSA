const flattenArray = (arr) => {
  let flattened = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flattenArray(element));
    } else {
      flattened.push(element);
    }
  });

  return flattened;
};

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

function flattenObject(obj, parentKey = "") {
  let flattened = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }

  return flattened;
}

// Flatten Deeply Nested Array

const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      result.push(ar);
    }
  });
  return result;
};

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
console.log(customFlat(arr3, 2));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
