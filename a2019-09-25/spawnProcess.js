const cp = require("child_process");

var childProcess = cp.spawn("node",["childProcess1.js"]);
var result = "";
childProcess.stdin.on("data",function(chunk){
    console.log(chunk);
    result += chunk;
})

childProcess.stdout.on("close",function(chunk){
    console.log(chunk);
})
