// Define the value to be obtained
let V = 49;

// Initialize an array to store the selected coins
let ans = [];

// Define the available coin denominations
let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
let n = 9; // Number of coin denominations

// Iterate through the coin denominations in reverse order
for (let i = n - 1; i >= 0; i--) {
  // While the value to be obtained is greater than or equal to the current coin denomination
  while (V >= coins[i]) {
    // Subtract the coin denomination from the remaining value
    V -= coins[i];
    // Add the coin denomination to the selected coins array
    ans.push(coins[i]);
  }
}

// Print the minimum number of coins required
console.log("The minimum number of coins is", ans.length);
// Print the selected coins
console.log("The coins are", ans.join(" "));
