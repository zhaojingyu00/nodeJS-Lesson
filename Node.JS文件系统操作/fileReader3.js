const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];


http.createServer(function(req,res){
    if(fileName == undefined){
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);    
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            
            if(err){
                console.log(err);
            }
            else{
                fs.createReadStream(fileName);
                reader.pipe(res);
            }
        }
        else{
            res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
            res.end("文件不存在");
        }
    }
}).listen(8081)

console.log("server is listening 8081");