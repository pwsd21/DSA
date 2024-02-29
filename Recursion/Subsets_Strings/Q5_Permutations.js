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

const ans = Permutations("", "abc");
console.log(ans);

// returning in array list
const PermutationsArray = (p, up) => {
  let result = [];
  if (up === "") {
    result.push(p);
    return result;
  }

  let ch = up.charAt(0);
  for (let i = 0; i <= p.length; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    result.push(...PermutationsArray(f + ch + s, up.substring(1)));
  }

  return result;
};

const permutationsArray = PermutationsArray("", "abc");
console.log(permutationsArray);

// Count
const PermutationsCount = (p, up) => {
  if (up === "") {
    return 1;
  }
  let count = 0;
  let ch = up.charAt(0);
  for (let i = 0; i <= p.length; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    count = count + PermutationsCount(f + ch + s, up.substring(1));
  }
  return count;
};

console.log(PermutationsCount("", "abc"));
