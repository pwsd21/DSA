const merge = (intervals) => {
  const startIndex = 0;
  const endIndex = 1;

  intervals.sort((a, b) => a[startIndex] - b[startIndex]); // sorting based on startIndex of Intervals - can use merge sort here

  console.log(intervals, "intervalssss");
  const mergedIntervals = [];
  let mergeStart = intervals[0][startIndex];
  let mergeEnd = intervals[0][endIndex];
  console.log(mergeStart, mergeEnd, "startednddddd");

  for (let i = 1; i < intervals.length; i++) {
    const subsequentInterval = intervals[i];

    if (subsequentInterval[startIndex] <= mergeEnd) {
      mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
    } else {
      mergedIntervals.push([mergeStart, mergeEnd]);
      mergeStart = subsequentInterval[startIndex];
      mergeEnd = subsequentInterval[endIndex];
    }
  }
  mergedIntervals.push([mergeStart, mergeEnd]);
  return mergedIntervals;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
