// BEST APPROACH USING HASHMAP

function twoSumm(nums, target) {
  const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(nums[i], i);
  }

  return null; // If no solution is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

// Basic Approach
const twoSum = (arr, target) => {
  let diff;
  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    if (arr.includes(diff)) {
      return [i, arr.indexOf(diff)];
    }
  }
};

// console.log(twoSum([2, 17, 11, 7], 9));

const twoSum2 = (arr, target) => {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    var n = arr[i];
    if (obj[target - n] >= 0) {
      console.log([obj[target - n], i]);
      return [obj[target - n], i];
    } else {
      obj[n] = i;
      console.log("elseee", obj[n]);
    }
    console.log(obj);
  }
};

console.log(twoSum2([2, 17, 11, 7], 9));

const result = twoSumm(nums, target);
console.log(result); // Output: [0, 1]
