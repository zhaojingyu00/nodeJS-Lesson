//姓名：赵婧瑜
//学号：2017011836
const fs = require("fs");
const path = require("path");
var workName = process.argv[2];
function work(){
    if(workName == undefined){
        console.log("命令行参数错误");
    }
    else{
        var name = workName.slice(0,5);
        if(workName == 'list'){
            showList();
        }
        else if(name == 'mkdir'){
            createFolder();
        }  
        else{
            console.log("命令行参数错误");
        }
    }
}

function showList(){
    var list = [];
    var filePath = path.join(__dirname,"");
    var files = fs.readdirSync(filePath);
   
    for(var i = 0;i < files.length;i++){
        var fileObj = {};
        
        var childPath = path.join(filePath,files[i]);
        var statObj = fs.statSync(childPath);
        //var arr = [];
        //var i = 0;
        if(statObj.isFile()){
            fileObj.fileName = files[i];
            fileObj.fileSize = statObj.size;
            list.push(fileObj);
            if(i==files.length-1){
                console.log(list);
            }
        }
    }
}



function createFolder(){
    fs.mkdirSync(workName.slice(6,));
}

work();