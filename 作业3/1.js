const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
var querystring = require('querystring');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
        if (pathName == "/list"){
            showList(res);           
        }
        else if (pathName == "/chapter"){
            showDetail(res);            
        }
        else if (pathName.indexOf("/detail")>=0){
            showDetail(res);            
        }
        else if(pathName == "/add"){
            addmyli(req,res);
        }
        else if(pathName == "/addli"){
            addmylist(res);
        }
        else if(pathName =="/login"){
            showLogin(res);            
        }
        else if(pathName =="/listmanager"){
            showListmanager(res);      
        }
        else if(pathName == '/mylist'){
            showmylist(res);
        }
        else if(pathName =="/addChapter"){
            showAddChpter(res);           
        }
        else if(pathName=='/css' && req.method == 'POST'){
            cssFile(req,res);
        }
        else if(pathName.indexOf('css')>=0 && req.method == 'GET'){
            var cssSrc = path.join(__dirname,pathName);
            var cssContent = fs.readFileSync(cssSrc);
            res.writeHead(200,"Content-Type","html/text");
            res.end(cssContent);
        }
        else if(pathName=='/js' && req.method == 'POST'){
            jsFile(req,res);
        }
        else if(pathName.indexOf('js')>=0 && req.method == 'GET'){
            var jsSrc = path.join(__dirname,pathName);
            var jsContent = fs.readFileSync(jsSrc);
            res.writeHead(200,"Content-Type","html/text");
            res.end(jsContent);
        }
        else if(pathName=='/login' && req.method == 'POST'){
            uploadFile(req,res);
        }
        else if(pathName.indexOf('login_bg.jpg')>=0 && req.method == 'GET'){//是客户端要图片的请求
            // 一个一个的把图片都响应回去
            var imgSrc = path.join(__dirname,pathName);
            var imgContent = fs.readFileSync(imgSrc);
            res.writeHead(200,"Content-Type","image/jpg");
            res.end(imgContent);
        }
        else if(pathName=='/images' && req.method == 'POST'){
            uploadFile(req,res);
        }
        else if(pathName.indexOf('images')>=0 && req.method == 'GET'){//是客户端要图片的请求
            // 一个一个的把图片都响应回去
            var imgSrc = path.join(__dirname,pathName);
            var imgContent = fs.readFileSync(imgSrc);
            res.writeHead(200,"Content-Type","image/jpg;image/jpeg");
            res.end(imgContent);
        }
}).listen(8083)

var chapterList = [
    {
        "chapterId": 1,
        "chapterName": "hello ,这是后台取到的数据",
        "imgPath": "images/1442457564979540.jpeg",
        "chapterDes": "注定，有些路，只能一个人走；有些事，",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 1022
    },
    {
        "chapterId": 2,
        "chapterName": "那些不是事",
        "imgPath": "images/1442201163344838-lp.jpg",
        "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    },
    {
        "chapterId": 3,
        "chapterName": "只想，留住心中的那份静美",
        "imgPath": "images/1442642178239101-lp.jpg",
        "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 202
    },
    {
        "chapterId": 4,
        "chapterName": "所以才会美",
        "imgPath": "images/1442539025939884-lp.jpg",
        "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    }
];
var beginli=[];
var endli=[];
var myli=[];
function addmyli(req,res){
    var addStr = '';
    req.setEncoding('binary');
    req.on("data",function(chunk){
        addStr += chunk;
    })
    req.on("end",function(){
        if(addStr){
            var fileObj2={};
            fileObj2.chapterId = chapterList.length+1;
            fileObj2.chapterName=addStr;
            fileObj2.views = 0;
            endli.push(fileObj2);
            chapterList.push.apply(chapterList,endli);
            endli=[];
        }
        var listStr = JSON.stringify(chapterList);
        res.writeHead(200,{"Content-Type":"text/html;text/plain;charset:utf-8"});
        res.end(listStr);
    })
    console.log("执行add");
};
function addmylist(res){
    var listStr = JSON.stringify(chapterList);
    res.writeHead(200,{"Content-Type":"text/html;text/plain;charset:utf-8"});
    res.end(listStr);
    console.log("执行addli");
}
function showList(res){
    var indexPath = path.join(__dirname,'./chapterList.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(fileContent);
    console.log("list");
}
function showDetail(res){
    var detailPath = path.join(__dirname,"./chapter.html");
    var detailContent = fs.readFileSync(detailPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(detailContent);
}
function showLogin(res){
    var loginPath = path.join(__dirname,"./login.html");
    var loginContent = fs.readFileSync(loginPath);
    res.end(loginContent);
}
function showListmanager(res){
    var listPath = path.join(__dirname,"./list.html");
    var listContent = fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(listContent);  
}
var list=[];
function showmylist(res){
    list=[];
    for(var i = 0;i < chapterList.length;i++){
        var fileObj = {};
        fileObj.chapterId = chapterList[i].chapterId;
        fileObj.chapterName = chapterList[i].chapterName;
        fileObj.imgPath=chapterList[i].imgPath;
        fileObj.publishTimer = chapterList[i].publishTimer;
        fileObj.chapterDes=chapterList[i].chapterDes;
        
        fileObj.author=chapterList[i].author; 
        fileObj.views=chapterList[i].views; 
        list.push(fileObj);//得到一个数组
    }
    var listStr = JSON.stringify(list);
    res.writeHead(200,{"Content-Type":"text/html;text/plain;charset:utf-8"});
    res.end(listStr);  
}
function showAddChpter(res){
    var addPath = path.join(__dirname,"./addChapter.html");
    var addContent = fs.readFileSync(addPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(addContent);
}
function uploadFile(req,res){
    var dataStr = '';//用来接收数据
    req.setEncoding('binary');
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        res.end(dataStr);
    })
}
function cssFile(req,res){
    var cssStr = '';//用来接收数据
    req.setEncoding('binary');
    req.on("data",function(chunk){
        cssStr += chunk;
    })
    req.on("end",function(){
        res.end(cssStr);
    })
}
function jsFile(req,res){
    var jsStr = '';//用来接收数据
    req.setEncoding('binary');
    req.on("data",function(chunk){
        jsStr += chunk;
    })
    req.on("end",function(){
        res.end(jsStr);
    })
}
