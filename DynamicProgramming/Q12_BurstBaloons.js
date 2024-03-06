const maxCoins = function (balloons) {
  // Create an auxiliary array with added 1s at the beginning and end
  const auxArray = new Array(balloons.length + 2).fill(null);
  let idx = 1;

  // Filter positive balloon values and add them to the auxiliary array
  for (let balloonVal of balloons) {
    if (balloonVal > 0) auxArray[idx++] = balloonVal;
  }

  // Set the first and last elements of the auxiliary array to 1
  auxArray[0] = auxArray[idx++] = 1;

  // Create a 2D array to store results of subproblems
  const cache = Array.from({ length: idx }, () => new Array(idx).fill([]));

  // Call the recursive burst function to calculate the maximum coins
  return burst(cache, auxArray, 0, idx - 1);
};

function burst(cache, auxArray, left, right) {
  // Base case: No balloons in between
  if (left + 1 == right) return 0;

  // If the result is already in the cache, return it
  if (cache[left][right] > 0) return cache[left][right];

  let max = 0;

  // Iterate over the balloons between left and right
  for (let idx = left + 1; idx < right; idx++) {
    // Calculate the coins obtained by bursting the balloon at idx
    max = Math.max(
      max,
      auxArray[left] * auxArray[idx] * auxArray[right] +
        burst(cache, auxArray, left, idx) +
        burst(cache, auxArray, idx, right)
    );
  }

  // Cache the result and return the maximum coins
  cache[left][right] = max;
  return max;
}
