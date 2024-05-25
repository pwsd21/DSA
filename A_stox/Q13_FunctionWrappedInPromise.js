// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous data fetching (e.g., API call)
    setTimeout(() => {
      // Assuming data is fetched successfully
      const data = { name: "John", age: 30 };
      resolve(data); // Resolve the Promise with the fetched data
    }, 2000); // Simulating a 2-second delay
  });
}

// Usage of the fetchData function with Promise
fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
    // Perform further operations with the fetched data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    // Handle errors if data fetching fails
  });
