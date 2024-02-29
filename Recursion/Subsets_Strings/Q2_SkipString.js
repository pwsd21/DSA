const skip = (up) => {
  if (up === "") {
    return "";
  }

  let ch = up.charAt(0);

  if (up.startsWith("apple")) {
    return skip(up.substring(5));
  } else {
    return ch + skip(up.substring(1));
  }
};

console.log(skip("bdsapplefg"));
