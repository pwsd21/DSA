const Permutations = (p, up) => {
  if (up === "") {
    console.log(p);
    return;
  }
  let ch = up.charAt(0);
  for (let i = 0; i <= p.length; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    Permutations(f + ch + s, up.substring(1));
  }
};

console.log(Permutations("", "abc"));
