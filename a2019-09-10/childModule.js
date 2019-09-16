function sayHello(){
    console.log("hello world");
}
function showName(){
    console.log(userName);
}
var userName = "zhangsan";
module.exports = {//填写想让外面访问的方法
    sayHello: sayHello
}

