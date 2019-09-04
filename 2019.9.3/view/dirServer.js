//1.引入http原生模块
const http = require("http");
const fs = require("fs");
const url =require("url");
const path=require("path");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //req.url表示URL地址，端口以后的内容
    //使用了url.parse将req.url转化为了对象，对象提取pathname
    //console.log(req.url);
    var urlObj = url.parse(req.url);
    console.log(urlObj);
    var urlPathName=urlObj.pathname;
    console.log(urlPathName);
    if(urlPathName=="/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        //4.当客户端的http请求发起的时候，才会执行回调函数里的内容
        var htmlPath = __dirname+"\\view\\index.html";//相对路径
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    else if(urlPathName=="/js/index.js"){
        var jsPath=path.join(__dirname,"/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }
    
});
//3.服务监听一个端口
server.listen(8093);
console.log("server is listening 8093");
     