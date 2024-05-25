const removeElement = (nums, val) => {
  let count = 0;
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      nums.push("_");
      count++;
      i--;
    }
  }
  return nums.length - count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
