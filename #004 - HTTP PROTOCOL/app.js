var http = require("http");

http.createServer(function(req, res){
    res.end("Hello!");
}).listen(8081);

console.log("server running on 8081... \nvisit localhost:8081");
