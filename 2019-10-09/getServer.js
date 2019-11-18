const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    /**
     *哪些请求发起的是get请求
     *1.点击超链接
     *2.地址栏通过网址请求
     *3.ajax发起get请求 
     *接收get请求的参数：
     *req.url(http.IncomingMessage.url)
     *提取url上的有效数据，例如资源路径、参数
     *可以借助于url模块(原生模块)，url.parse(req.url,res.url);
     *
     */
    var urlObj = url.parse(req.url,true);//若提取参数时，需要加第二个参数为true
    console.log(urlObj);

}).listen(8081);
console.log("server is listening 8081");