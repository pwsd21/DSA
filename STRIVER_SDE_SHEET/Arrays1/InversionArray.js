function numberOfInversions(a) {
  let cnt = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) cnt++;
    }
  }
  return cnt;
}

const a = [5, 4, 3, 2, 1];
const cnt = numberOfInversions(a);
console.log("The number of inversions is: " + cnt);
