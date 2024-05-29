class Item {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}

class Solution {
  fractionalKnapsack(W, arr, n) {
    // Sort items by value per unit weight in descending order
    arr.sort((a, b) => b.value / b.weight - a.value / a.weight);

    let curWeight = 0; // Current total weight in the knapsack
    let finalValue = 0.0; // Final value obtained

    // Iterate over the sorted items
    for (let i = 0; i < n; i++) {
      // If adding the entire item won't exceed the knapsack's capacity
      if (curWeight + arr[i].weight <= W) {
        curWeight += arr[i].weight;
        finalValue += arr[i].value;
      } else {
        // Calculate the remaining weight that can be added fractionally
        let remain = W - curWeight;
        // Add the fractional value of the remaining weight of the current item
        finalValue += (arr[i].value / arr[i].weight) * remain;
        break; // Knapsack capacity reached
      }
    }

    // Return the final value obtained
    return finalValue;
  }
}

// Test the function
let n = 3;
let W = 50;
let arr = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];
let obj = new Solution();
let ans = obj.fractionalKnapsack(W, arr, n);
console.log("The maximum value is", ans);
