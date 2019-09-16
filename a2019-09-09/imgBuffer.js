/**
 * 1.将图片的二进制数据转化为base64字符串编码格式
 * 将base64字符编码直接存到网页中，浏览器可以识别该
 * 编码的，将改变吗转化为一个图片显示
 * 2.适用于图片较小的情况，减小http请求数量，提高页面
 * 性能。
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"1.jpg");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    console.log(base64Data);
    var imgSrc = "data:image/jpg;base64," + base64Data;
    var htmlStr = "<!DOCTYPE html><head></head>" + "<body><img src='"+ imgSrc +"'/></body>"+"</html>"
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);
console.log("server is listening 8081");