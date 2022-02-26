// use 'require()' to call a module exported in other file
sum_function = require("./sum");
subtract_function = require("./sub");
multiply_function = require("./mult");
divide_function = require("./div");

console.log(sum_function(50, 50));
console.log(subtract_function(100, 10));
console.log(multiply_function(4, 4));
console.log(divide_function(50, 2));
