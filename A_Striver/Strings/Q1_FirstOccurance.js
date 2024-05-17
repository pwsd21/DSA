const firstOccurance = (str, ch) => {
  for (let c of str) {
    if (c.startsWith(ch)) {
      return c;
    }
  }
  return -1;
};

console.log(firstOccurance("sadbutsad", "sad"));
