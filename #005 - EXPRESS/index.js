// Import express
const express = require("express");

// Load the module and adding in a const called app
const app = express();

app.listen(8081, function(){
  console.log("server running on http://localhost:8081")
});
