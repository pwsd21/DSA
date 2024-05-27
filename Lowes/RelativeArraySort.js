var relativeSortArray = function (arr1, arr2) {
  const hasmap = new Map();
  for (let i = 0; i < arr2.length; i++) {
    hasmap.set(arr2[i], i);
  }

  return arr1.sort(
    (a, b) =>
      (!hasmap.has(a) ? arr1.length + a : hasmap.get(a)) -
      (!hasmap.has(b) ? arr1.length + b : hasmap.get(b))
  );
};

var relativeSortArrayMethod = function (arr1, arr2) {
  const lookup = new Map();
  const N = arr2.length;
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};
