// Go through documentation of String Methods
// p-> processed string, up -> unprocessed string

const skip = (p, up) => {
  if (up === "") {
    console.log(p);
    return;
  }
  let ch = up.charAt(0);

  if (ch == "a") {
    skip(p, up.substring(1));
  } else {
    skip(p + ch, up.substring(1));
  }
};

skip("", "baccdaha");

// Alternate way , without using empty string in argument
// creating variables during recursion calls

const SkipChar = (up) => {
  if (up == "") {
    return "";
  }
  let ch = up.charAt(0);
  if (ch == "a") {
    return SkipChar(up.substring(1));
  } else {
    return ch + SkipChar(up.substring(1));
  }
};

console.log(SkipChar("bcaachd"));
