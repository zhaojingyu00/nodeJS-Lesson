//1.引入http原生模块
const http = require("http");//http被称为原生模块
const fs = require("fs");
const path = require("path");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlpath = path.join(__dirname,"/view/index.html");
     //console.log(htmlpath);
    var htmlContent = fs.readFileSync(htmlpath);
    htmlContent = htmlContent.toString("utf8");
    //console.log(htmlContent);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
    // res.end("接收到客户端请求");
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");