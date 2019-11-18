/**
 * https 是在http基础上进行了SLL加密
 * 让数据不再明文传输
 */
const https=require('https');

https.get("https://www.baidu.com/",function(res){
    var result="";    
    res.on("data",function(chunk){
        result+=chunk;
    })
    res.on("end",function(){
        console.log(result);
    })

})