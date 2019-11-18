const http = require('http');
const fs = require("fs");
const cheerio = require('cheerio');

http.get('https://maoyan.com/films',function(res){
    var data = "";
    res.on("data",function(chunk){
        data += chunk;
    });
    res.setEncoding("end",function(){
        filter(data);
    })
})