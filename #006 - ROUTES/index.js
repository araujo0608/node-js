const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.end("Welcome to my website!");
})

app.listen(8081, function(){
  console.log("server running on http://localhost:8081");
});
