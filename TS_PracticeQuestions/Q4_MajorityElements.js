var majorityElement = function (nums) {
  let candidate1 = 0,
    candidate2 = 1,
    count1 = 0,
    count2 = 0;

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  let result = [];
  if (nums.filter((n) => n === candidate1).length > nums.length / 3)
    result.push(candidate1);
  if (nums.filter((n) => n === candidate2).length > nums.length / 3)
    result.push(candidate2);
  return result;
};
