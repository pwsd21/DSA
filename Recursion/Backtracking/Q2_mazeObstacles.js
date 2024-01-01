const mazeObstacles = (p, maze, r, c) => {
  if (r == maze.length - 1 && c == maze[0].length - 1) {
    console.log(p);
  }

  if (!maze[r][c]) {
    return;
  }

  if (r < maze.length - 1) {
    mazeObstacles(p + "D", maze, r + 1, c);
  }

  if (c < maze[0].length - 1) {
    mazeObstacles(p + "R", maze, r, c + 1);
  }
};

const board = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

// console.log(mazeObstacles("", board, 0, 0));

// Alternate with arraylist and values without undefined
const mazeRestrictions = (p, maze, r, c) => {
  // Check if the destination is reached
  if (r === maze.length - 1 && c === maze[0].length - 1) {
    console.log(p);
    return [p]; // Return the path in an array
  }

  // Check for obstacles
  if (!maze[r][c]) {
    return []; // Return an empty array to signify an invalid path
  }

  let paths = [];

  // Explore down
  if (r < maze.length - 1) {
    paths = paths.concat(mazeRestrictions(p + "D", maze, r + 1, c));
  }

  // Explore right
  if (c < maze[0].length - 1) {
    paths = paths.concat(mazeRestrictions(p + "R", maze, r, c + 1));
  }

  return paths;
};

const boarrd = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

console.log(mazeRestrictions("", boarrd, 0, 0));
