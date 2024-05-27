// Basic Way
const isPalindrome = (x) => {
  return x < 0 ? false : +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(120021));
