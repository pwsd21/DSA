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
