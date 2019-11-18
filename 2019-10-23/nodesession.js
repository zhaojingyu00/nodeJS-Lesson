const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");
http.createServer(function (req,res){
    var urlObj=url.parse(req.url,true);
    switch(urlObj.pathname){
        case "/":
            showLogin(res);
            break;
        case '/login':
            loginIn(req,res);
            break;
        case '/home':
            showHome(req,res);
            break;
    }
}).listen(8081);
console.log("server is listening 8081");
function showLogin(res){
    var filePath = path.join(__dirname,'login.html');
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
var sessions = {};
function loginIn(req,res){
    var formData="";
    req.on("data",function(chunk){
        formData += chunk;
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        if(formObj.username =='zhangsan'&&formObj.pwd=='123'){
            // res.setHeader("Set-Cookie","username=zhangsan","max-age=60");
            var session = {
                sessionId:(new Date()).getTime() + Math.random(),
                exipire:(new Date()).getTime()+60,
                userName:"zhangsan"
            }
            sessions[session.sessionId] = session;
            res.setHeader("Set-Cookie","seeesionId" + session.sessionId);
            res.end("login success");
        }
        else{
            res.end("login erro");
        }
    })
}
function showHome(req,res){
    var cookie = req.headers['cookie'];
    if(cookie == undefined){
        showLogin(res);
    }
    cookie = cookie.trim();
    var cookieArr = cookie.split(";");
    var cookieObj = {};
    for(var i = 0;i<cookieArr.length;i++){
        var cookiePair = cookieArr[i].split("=");
        cookieObj[cookiePair[0].trim()]=cookiePair[1];
    }
    var sessionId = cookieObj.sessionId;
    for(var key in sessions){
        if(key == sessionId){
            var sessions = sessions[key];
            if((new Date()).getTime()<session.exipire){
                res.end("home page");
            }
            else{
                showLogin(res);
            }
        }
    }
}