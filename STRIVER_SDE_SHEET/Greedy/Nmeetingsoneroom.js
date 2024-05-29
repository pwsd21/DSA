class Meeting {
  constructor(start, end, pos) {
    this.start = start;
    this.end = end;
    this.pos = pos;
  }
}

class Solution {
  maxMeetings(start, end, n) {
    // Create an array of meeting objects
    let meetings = [];
    for (let i = 0; i < n; i++) {
      meetings.push(new Meeting(start[i], end[i], i + 1));
    }

    // Sort the meetings by end time and then by position
    meetings.sort((a, b) => {
      if (a.end !== b.end) {
        return a.end - b.end;
      } else {
        return a.pos - b.pos;
      }
    });

    // Find the maximum number of meetings that can be conducted
    let answer = [];
    let limit = meetings[0].end;
    answer.push(meetings[0].pos);
    for (let i = 1; i < n; i++) {
      if (meetings[i].start > limit) {
        limit = meetings[i].end;
        answer.push(meetings[i].pos);
      }
    }

    // Print the order of meetings
    console.log("The order in which the meetings will be performed is ");
    for (let i of answer) {
      process.stdout.write(i + " ");
    }
  }
}

// Test the solution
let obj = new Solution();
let n = 6;
let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 5, 7, 9, 9];
obj.maxMeetings(start, end, n);
