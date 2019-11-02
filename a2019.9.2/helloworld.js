const http = require("http");

var server = http.createServer(function(req,res){
    /**
     * http协议，协议的结构  协议的请求响应过程
     * 状态码
     * 
     */
    res.write(200,{"Content-Type":"text/plain"});
    res.write("<h1>hello world</h1>");
    //响应结束
    res.write("hello world");
    res.end();

});

server.listen(8081);
console.log("server is listening 8081");
/*
1.shift + 鼠标右键  点击打开 power shell 窗口
2.编译node.js 文件 node + 文件名
3.每次修改js文件时需要重新执行 node + 文件名
4.在node中的js文件 必须编译才能执行
5.WebStom
*/ 