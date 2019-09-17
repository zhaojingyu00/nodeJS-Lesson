const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    var filePath=path.join(_dirname,"/views.html");
    console.log(filePath);//输出路径
    var fileContent=fs.readFileSync(filePath);
    fileContent = fileContent.toString("utf8");
    res.writeHead(200,{"content-type":"text/html"});
    res.write(fileContent);
    res.end();
}).listen(8080);
console.log("server is listening 8080");



// var server = http.createServer(function(req,res){
//     var urlObj = url.parse(req.url);
//     var urlPathName=urlObj.pathname;
//     if(urlPathName=="/favicon.ico"){
//         res.end();
//     }
//     else if(urlPathName == "/"){
//         var htmlPath = __dirname+"\\view\\index.html";
//         var htmlContent = fs.readFileSync(htmlPath);
//         htmlContent = htmlContent.toString("utf8");
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write(htmlContent);
//         res.end();
//     }
//     else if(urlPathName=="/view/index.js"){
//         var jsPath=path.join(__dirname,"/view/index.js");
//         var jsContent = fs.readFileSync(jsPath);
//         res.writeHead(200,{"Content-Type":"text/javascript"});
//         res.write(jsContent);
//         res.end();
//     }
    
// })
// server.listen(8080);
// console.log("server is listening 8080")