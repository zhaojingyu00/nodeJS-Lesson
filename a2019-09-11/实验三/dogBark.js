/*function smalldog(name,energy){
    this.name=name;
    this.energy=energy;
}
var dog0 = new smalldog("taidi",4);
var dog1 = new smalldog("zangao",8);
module.exports={
    smalldog:smalldog
}*/

var Dog = require("./dog");
var dog1 = new Dog("taidi",5);

function barkFunction(){
    console.log(this.name + " bark!!");
    console.log(this.energy);
}


dog1.on("bark!!",barkFunction);
var intervalId = setInterval(function(){
    if(dog1.energy >= 0){
        dog1.emit("bark!!");
    }
    else{
        intervalId.unref();
    }
    dog1.energy = dog1.energy-1;
},1000);