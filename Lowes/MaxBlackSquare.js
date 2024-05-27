function printMaxSubSquare(M) {
  const R = M.length;
  const C = M[0].length;
  let Max = 0;
  let S = new Array(2);
  for (let i = 0; i < 2; i++) {
    S[i] = new Array(C).fill(0);
  }
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let Entrie = M[i][j];
      if (Entrie) {
        if (j) {
          Entrie = 1 + Math.min(S[1][j - 1], Math.min(S[0][j - 1], S[1][j]));
        }
      }
      S[0][j] = S[1][j];
      S[1][j] = Entrie;
      Max = Math.max(Max, Entrie);
    }
  }

  console.log("Maximum size sub-matrix is:");
  for (let i = 0; i < Max; i++) {
    let row = "";
    for (let j = 0; j < Max; j++) {
      row += "1 ";
    }
    console.log(row);
  }
}

// Driver code
const M = [
  [0, 1, 1, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

printMaxSubSquare(M);
