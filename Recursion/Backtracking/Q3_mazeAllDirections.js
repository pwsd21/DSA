const mazeBacktracking = (p, maze, r, c) => {
  if (r == maze.length - 1 && c == maze[0].length - 1) {
    console.log(p);
    return;
  }

  if (!maze[r][c]) {
    return;
  }

  maze[r][c] = false;

  if (r < maze.length - 1) {
    mazeBacktracking(p + "D", maze, r + 1, c);
  }

  if (c < maze[0].length - 1) {
    mazeBacktracking(p + "R", maze, r, c + 1);
  }

  if (r > 0) {
    mazeBacktracking(p + "U", maze, r - 1, c);
  }

  if (c > 0) {
    mazeBacktracking(p + "L", maze, r, c - 1);
  }

  // this line is where function gets over
  // so once function gets reomved, remove the changes done also
  maze[r][c] = true;
};

const board = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

mazeBacktracking("", board, 0, 0);
