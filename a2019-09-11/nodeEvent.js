//1.引入events模块
const events = require("events");
//实例化event对象
var eventEmitter = new events.EventEmitter();
//绑定事件，事件监听
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
/**eventEmitter.once("hello",function(arg1,arg2){             //once可以表示只触发一次事件
    console.log("hello world");
    console.log(arg1,arg2);
})*/
//触发事件,可以进行参数的传递,可以进行多次事件的触发
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");