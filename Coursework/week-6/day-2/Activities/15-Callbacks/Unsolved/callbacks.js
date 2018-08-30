var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function logMes(str, cb) {
    console.log(str);
    cb();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function truthy(bool, cb) {
    if (bool) {
        cb();
    }
}
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function func(f, v) {
    return function () {
        return f(v);
    }
}

function sum(a) {
    return function (b) {
        return a + b;
    }
}

var x = sum(5)(10);
console.log(x);

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
