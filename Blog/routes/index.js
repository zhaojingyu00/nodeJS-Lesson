var express = require('express');
var router = express.Router();
var data = require(".././data.json");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('login', {user:data.users[0]});
});

router.get('/list',function(req,res,next){
    res.render('list',{chapterList:data.chapterList});
})


router.post('/tijiao',function(req,res,next){
  req.setEncoding('utf-8');
  if(req.body.username==data.users[0].username && req.body.pwd==data.users[0].password){
    res.render('list',{chapterList:data.chapterList});
  }
  else{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("用户名、密码错误");
  }
})

module.exports = router;
