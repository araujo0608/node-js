# MODULES

  In short, JavaScript modules are a way for you to share information between files, so that all files that import this module can use and enjoy its functions or     information that have been exposed.
  
 Suppose you have a function in a file called `sum.js` and want use this function in other file called `calc.js`. To work, you need to export the function as a module and then import it from another file.
 
 > Use `module.exports = var` to export a function.
 
 In `sum.js`:
 
 ~~~javascript
 sum = function(a, b){
     return a + b;
 }
 
 module.exports = sum;
 ~~~
 
 <br>
 
 > Use `require("path...")` to "import" any function exported
 
 Now in `calc.js`:
 
 ~~~javascript
 sum_function = require("./sum");
 console.log(sum_function(10, 10));
 ~~~
