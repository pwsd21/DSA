// Print series from n to 1

const series = (n) => {
  if (n === 0) {
    return;
  }
  console.log(n);
  series(n - 1); // return series(n-1) - both are same
  // series(--n) - similar results
  console.log(n);
};

series(5);

// to print series from 1 to N

// const series = (n) => {
//     if (n === 0) {
//       return;
//     }
//     series(n - 1);
//     console.log(n);
//   };
