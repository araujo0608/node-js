# ROUTES

A route is a "path" that will be "called" by an application or client and respond to some information.

For example, when I access [https://google.com](https://www.google.com/) it returns the default Google page, but when I access [https://google.com/robots.txt](https://www.google.com/robots.txt) it returns other data. Because we accessed another route, in this case robots.txt

![homepage](google-homepage.png);

<br>

![robots](google-robots.png);

Each route can have one or more functions, and it must be unique; when it receives a call it does all the necessary processing to return the data that was requested.

<br>

And there is no point in randomly accessing any route, it must be a route known by the application. In other words, there is no point in "creating" new non-existent routes because the back-end will return an error, probably with code 404. Like this:

![error](google-noroute.png);

## HOW USE ROUTES IN EXPRESS


When you access the webpage in first time, you saw a message like that: `cannot get /` in HTML body. This is why we don't configure any route in our application.

1. Add a route in code:

~~~javascript
app.get("/", function(req, res){
  res.end("Welcome to my website!");
});
~~~

> app.get(route, callback function)

Final code:

~~~javascript
const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.end("Welcome to my website!");
})

app.listen(8081, function(){
  console.log("server running on http://localhost:8081");
});
~~~
