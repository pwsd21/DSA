const nextGreaterElements = (nums1, nums2) => {
  const nextGreater = new Map();
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];

    while (stack.length !== 0 && stack[stack.length - 1] < num) {
      nextGreater.set(stack.pop(), num);
    }

    stack.push(num);
  }

  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    result.push(nextGreater.has(num) ? nextGreater.get(num) : -1);
  }
  return result;
};

console.log(nextGreaterElements([4, 1, 2], [1, 3, 4, 2]));
