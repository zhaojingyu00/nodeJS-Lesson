// const http=require("http");
// const querystring=require("querystring")
// var infor={
//     "user":"zhangsan"
// };
// var str=querystring.stringify(infor);


// var options={
//     host:"localhost",
//     port:8081,
//     path:"/",
//     method:"post"
// }

// var req= http.request(options,function(res){
//     var result="";    
//     res.on("data",function(chunk){
//         result+=chunk;
//     })
//     res.on("end",function(){
//         console.log(result);
//     })
// })
// req.write(str);
// req.end();



const http = require("http");
const querystring = require("querystring");

// var infor = {"user":"zhangsan"};
// var str = querystring.stringify(infor);
var option = {
    host:"localhost",
    port:8081,
    path:"/",
    method:"post"
}
var username = process.argv[2];
var pwd = process.argv[3];
var postData = {username:username,pwd:pwd};
postData = querystring.stringify(postData);
var req = http.request(option,function(res){

});

req.write(postData);
req.end();