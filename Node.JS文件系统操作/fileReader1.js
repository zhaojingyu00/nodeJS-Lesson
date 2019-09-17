const http = require("http");
const fs = require("fs");
const path = require("path");
var dirName = process.argv[2];
console.log("dirName:" + dirName);
var cunzai = fs.existsSync(filePath);
if (cunzai != null){
    var filePath = path.join(__dirname,"/"+dirName);
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
        }
        else if(dirName == null){
            fs.readFile(FileReader),function(data){
                console.log(data.toString());
            }
        }
        else{
            http.createServer(function(req,res){
                function show(res){
                    var str = "<ul>";
                    for(var i = 0;i < fileList.length;i++){
                        var liNode = "<li></li>";
                        str += liNode;
                    }
                    str = str + "</ul>";
                    res.writeHead(200,{"Content-type":"text/html"});
                    res.write(str);
                    res.end();
                }
            }).listen(8081);
        }
    })
}

