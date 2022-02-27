
# HTTP SERVER WITH NODE

By default node has a HTTP module enabled, but is very limited. After we gonna use `express` framework, but now familiarize yourself with basic module.

<br>

1. First we need import the `http` module using `require()` and then create the server:

~~~javascript
var http = require("http");
~~~

2. Now we need create the server, don't be alarmed by the size of the code, it is quite easy to interpret:

~~~javascript
var http = require("http");

http.createServer(function(req, res){
   res.end("Hello World!");
}).listen(8081);

console.log("server running on localhost:8081...");
~~~

> `createServer()` creates our server, and we pass a function inside it to access the requests and responses through the parameters **req** and **res**;

> `res.end()` just show a message on HTML body;

> `listen()` define the port we need run server, i choose **8081**;

<br>

3. Now in your terminal run: 

```
node file.js
```
