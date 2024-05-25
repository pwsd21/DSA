// Remove Duplicates from sorted array

const removeDuplicates = (nums) => {
  let finalArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (finalArr.indexOf(nums[i]) === -1) {
      finalArr.push(nums[i]);
    } else {
      count++;
    }
  }
  return finalArr;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
