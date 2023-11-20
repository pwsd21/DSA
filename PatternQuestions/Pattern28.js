const Pattern28 = (n) => {
  for (let i = 1; i < 2 * n; i++) {
    let row = "";
    let totalColumn = i > n ? 2 * n - i : i;
    let noOfSpaces = n - totalColumn;
    for (let s = 1; s <= noOfSpaces; s++) {
      row += " ";
    }
    for (let j = 1; j <= totalColumn; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

Pattern28(5);
