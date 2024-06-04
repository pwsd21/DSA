const minDistGasStation = (arr, k) => {
  let start = 0;
  let end = 0;

  // Calculate the initial start and end values
  for (let i = 0; i < arr.length; i++) {
    start = Math.max(start, arr[i]);
    end += arr[i];
  }

  // Perform binary search
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    let pieces = 1;
    let totalDistance = 0;

    // Iterate through the array to calculate the number of pieces required
    // ********  - only this logic is diff for aggressive cows and gasStations problem from split array/books allocation
    for (let i = 0; i < arr.length; i++) {
      totalDistance += arr[i];
      if (totalDistance > mid) {
        pieces++;
        totalDistance = arr[i];
      }
    }

    // Adjust start or end based on the number of pieces
    if (pieces > k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  // Return the minimum maximum distance
  return start;
};

console.log(minDistGasStation([7, 2, 5, 10, 8], 2)); // Output: Approximately 6
