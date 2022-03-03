const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Welcome to my website!");
});

app.get("/about", function(req, res){
  res.send("About us");
});

app.get("/roadmap", function(req, res){
  res.send("Our roadmap");
});

// With param
app.get("/hello/:name/", function(req, res){
  res.send("Hello " + req.params.name);
});

app.listen(8081, function(){
  console.log("server running on http://localhost:8081");
});
