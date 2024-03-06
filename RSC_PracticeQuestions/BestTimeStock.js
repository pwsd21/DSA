// Greedy Algorithm
const bestTime = (arr) => {
  let minPurchase = arr[0] || 0;
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minPurchase) {
      minPurchase = arr[i];
    }
    profit = Math.max(profit, arr[i] - minPurchase);
  }
  return profit;
};

console.log(bestTime([7, 1, 5, 3, 6, 4]));
