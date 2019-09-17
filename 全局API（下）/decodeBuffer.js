var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf1 = Buffer.from(base64Str,"base64");
var buf2=buf1.toString("utf-8");
console.log("用户名：",buf2.slice(0,8),"密码：",buf2.slice(9));
