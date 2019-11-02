var Dog = require("./dog");
var dog1 = new Dog("taidi",5);
var dog2 = new Dog("zangao",9);

function barkFunction(){
    console.log(this.name + " bark!!" + "   energy:" + this.energy);
}


dog1.on("bark!!",barkFunction);
dog2.on("bark!!",barkFunction);
var intervalId = setInterval(function(){
    if(dog1.energy >= 0){
        dog1.emit("bark!!");
    }
    dog1.energy = dog1.energy-1;
    if(dog2.energy >= 0){
        dog2.emit("bark!!");
    }
    else{
        intervalId.unref();
    }
    dog2.energy = dog2.energy-1;
},1000);