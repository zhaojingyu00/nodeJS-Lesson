const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
var filePath1 = path.join(__dirname,"/file1.txt");
console.time("total");
console.time("test");
var fileContent = fs.readFileSync(filePath);//同步读取
console.timeEnd("test");
console.time("test1");
var fileContent1 = fs.readFileSync(filePath1);
console.timeEnd("test1");
console.timeEnd("total");
//console.log(fileContent.toString());
//console.log(fileContent1.toString());
console.log("read end");