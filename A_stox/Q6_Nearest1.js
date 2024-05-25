// Constants for matrix dimensions
const N = 3;
const M = 4;

// Function to print the distance of the nearest cell having 1 for each cell
function printDistance(mat) {
  // Initialize the answer matrix with Infinity
  let ans = Array.from({ length: N }, () => Array(M).fill(Infinity));

  // Queue for BFS
  let queue = [];

  // Enqueue all cells with 1 and set their distance to 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (mat[i][j] === 1) {
        ans[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  // Directions for moving in 4 possible directions (up, down, left, right)
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  // Perform BFS
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // Check bounds and if a shorter distance is found
      if (newX >= 0 && newX < N && newY >= 0 && newY < M) {
        if (ans[newX][newY] > ans[x][y] + 1) {
          ans[newX][newY] = ans[x][y] + 1;
          queue.push([newX, newY]);
        }
      }
    }
  }

  // Printing the answer matrix
  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < M; j++) {
      row += ans[i][j] + " ";
    }
    console.log(row);
  }
}

// Driver code
let mat = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
  [0, 1, 1, 0],
];

printDistance(mat);
