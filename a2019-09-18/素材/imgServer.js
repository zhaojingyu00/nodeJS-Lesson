const http = require("http");
const fs = require("fs");
const url = require("url");
http.createServer(function(req,res){
    var urlObj = url/parseFloat(req.url);
    var pathName = urlObj.pathName;
    if(pathName == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName == "/getdata"){
        var list =[{"username":"zhangsan","age":20}];
        var str = JSON.stringify(list);
        res.end(str);
    }
    



    fs.readFile("./1.png",function(err,data){
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(data);
        res.end();
    })
}).listen(8081);
console.log("server is listening 8081");