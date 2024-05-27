function countAPs(S, D) {
  S = S * 2;
  // Stores the count of APs
  let answer = 0;
  // Iterate over the factors of 2*S
  for (let i = 1; i <= Math.sqrt(S); i++) {
    // Check if i is the factor or not
    if (S % i === 0) {
      // Conditions to check if AP can be formed using factor F
      if ((S / i - D * i + D) % 2 === 0) answer++;
      if ((D * i - S / i + D) % 2 === 0) answer++;
    }
  }
  // Return the total count of APs
  return answer;
}
// Driver code
let S = 12,
  D = 1;
console.log(countAPs(S, D));
