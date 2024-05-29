class Job {
  constructor(id, deadline, profit) {
    this.id = id;
    this.deadline = deadline;
    this.profit = profit;
  }
}

class Solution {
  jobScheduling(jobs) {
    // Sort jobs by profit in descending order
    jobs.sort((a, b) => b.profit - a.profit);

    // Find the maximum deadline among the jobs
    let maxi = jobs[0].deadline;
    for (let i = 1; i < jobs.length; i++) {
      maxi = Math.max(maxi, jobs[i].deadline);
    }

    // Initialize an array to represent time slots, initialized with -1
    let slot = Array(maxi + 1).fill(-1);
    let countJobs = 0; // Count of jobs scheduled
    let jobProfit = 0; // Total profit earned

    // Iterate over the sorted jobs
    for (let i = 0; i < jobs.length; i++) {
      // Iterate over possible time slots, starting from the job's deadline
      for (let j = jobs[i].deadline; j > 0; j--) {
        // If the current time slot is empty, schedule the job
        if (slot[j] === -1) {
          slot[j] = i;
          countJobs++;
          jobProfit += jobs[i].profit;
          break;
        }
      }
    }

    // Return the count of jobs and the total profit earned
    return [countJobs, jobProfit];
  }
}

// Test the function
let jobs = [
  new Job(1, 4, 20),
  new Job(2, 1, 10),
  new Job(3, 2, 40),
  new Job(4, 2, 30),
];
let [count, profit] = new Solution().jobScheduling(jobs);
console.log(count, profit);
