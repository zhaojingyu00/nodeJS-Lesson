const http = require("http");
const fs = require('fs');
const url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postfile.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == "/upload"){
        var strData = "";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData += chunk;
        })
        req.on("end",function(){
           var dataArr = strData.split("\r\n");
            console.log(dataArr);
           var fileData = dataArr.slice(4,dataArr.length - 2);
           fileData = fileData.join("\r\n");
           var buf = Buffer.from(fileData,"binary");
        //    console.log(fileData);
        fs.writeFileSync("2.jpg",buf,{"encoding":"binary"});
        })
    }
}).listen(8081)
console.log("server is listening 8081");