const express = require('express');
const app = express();
const cors = require('cors'); 

const PORT = process.env.PORT || 8000;

app.use(cors()); // Enable CORS for all requests

// Configuration: time in milliseconds before status changes
const CONFIGURED_TIME = 10000; // 10 seconds
let startTime = Date.now(); // Record the start time


// Status API
app.get('/status', (req, res) => {
    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < CONFIGURED_TIME) {
        res.json({ result: "pending" });
      } else {
        let num = Math.random();
        console.log(num);
  
        const status = num > 0.5 ? "completed" : "error"; 
        res.json({ result: status });
      }
    }, 5000); // Wait for 5 seconds before processing the request
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});