/*const events = require ("events");
const EventEmitter =events.EventEmitter;
const smalldog = require("./dogBark");
var i = 0;
function Dog(name){
    //1.执行一遍父构造函数，并且this指向是子构造函数
    EventEmitter.call(this);
    var that = this;
    setTimeout(function(){
        i++;
        i=i%2; 
        that.emit("barke!!");
    },1000);
}
var dogger = "dog" + i;
Dog.prototype.__proto__ = EventEmitter.prototype;
var dogg = new Dog(this.name);
dogg.on("barke!!",function(){
    console.log(dogger.name + "bark!!" + "energy:" + dogger.energy);
});*/


//原生模块、核心模块
const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
}
Dog.prototype.__proto__=EventEmitter.prototype;
module.exports = Dog;