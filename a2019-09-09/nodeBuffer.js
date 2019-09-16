

var buf = Buffer.alloc(10);
console.log(buf);
//初始化一个buffer
var buf1 = Buffer.from("hello","utf-8");
//将一个utf-8编码的字符串转换成二进制数据的存储方式
console.log(buf1);
console.log(buf1.toString("base64"));

var base64Str = buf1.toString("base64");

var buf2 = Buffer.from(base64Str,"base64");
console.log(buf2.toString("utf-8"));
