// https://www.naukri.com/code360/problems/1062679?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website

const root = (N, M) => {
  let start = 1;
  let end = M;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (Math.pow(mid, N) === M) {
      return mid;
    } else if (Math.pow(mid, N) > M) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(root(4, 69));
console.log(root(3, 27));
