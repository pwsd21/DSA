function countStudents(arr, pages) {
  var n = arr.length; // size of array
  var students = 1;
  var pagesStudent = 0;
  for (var i = 0; i < n; i++) {
    if (pagesStudent + arr[i] <= pages) {
      // add pages to current student
      pagesStudent += arr[i];
    } else {
      // add pages to next student
      students++;
      pagesStudent = arr[i];
    }
  }
  return students;
}

function findPages(arr, n, m) {
  // book allocation impossible
  if (m > n) return -1;

  var low = Math.max(...arr);
  var high = arr.reduce((a, b) => a + b, 0);
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    var students = countStudents(arr, mid);
    if (students > m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

var arr = [25, 46, 28, 49, 24];
var n = 5;
var m = 4;
// var ans = findPages(arr, n, m);
// console.log("The answer is: " + ans);

const allocateBooks = (arr, n, m) => {
  let start = 0;
  let end = 0;

  for (let i = 0; i < n; i++) {
    start = Math.max(start, arr[i]);
    end += arr[i];
  }

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    let sum = 0;
    let pieces = 1;

    for (let i = 0; i < n; i++) {
      if (sum + arr[i] > mid) {
        sum = arr[i];
        pieces++;
      } else {
        sum += arr[i];
      }
    }

    if (pieces <= m) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

console.log(allocateBooks([12, 34, 67, 90], 4, 2));
