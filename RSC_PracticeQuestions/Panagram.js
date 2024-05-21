// Pangram String Checker
// charCodeAt - returns an integer between 0 & 65535 representing the UTF-16 code unit at the given index

function isPangram(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();

  const letters = new Set();

  for (let char of lowerCaseSentence) {
    if (char >= "a" && char <= "z") {
      letters.add(char);
    }
  }
  return letters.size === 26;
}

// Example usage
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const sentence2 = "This sentence is not a pangram.";

console.log(isPangram(sentence1)); // Output: true
console.log(isPangram(sentence2)); // Output: false
