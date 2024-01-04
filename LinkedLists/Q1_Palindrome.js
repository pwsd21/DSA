const isPalindrome = (head) => {
  let str1 = "";
  let str2 = "";
  let node = head;

  while (node != null) {
    str1 = `${str1}${node.val}`;
    str2 = `${node.val}${str2}`;
    node = node.next;
  }
  return str1 === str2;
};

console.log(isPalindrome([1, 2, 2, 1]));
