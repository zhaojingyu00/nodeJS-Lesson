//语法错误(SyntaxError:)     Unexpected identifier
//va a = 1;

/*引用错误（ReferenceError:）      a is not defined
*在某一个位置上使用了未定义的变量
*/
//console.log(a);   


/*http.createServer(function(req,res){

}).listen(8081)

const http = require("http");
http.createServer(function(req,res){

}).listen('jfjfdsdf')
*/
//TypeError: req.write is not a function
const http = require("http");
http.createServer(function(req,res){
req.write("hello");
}).listen(8081)