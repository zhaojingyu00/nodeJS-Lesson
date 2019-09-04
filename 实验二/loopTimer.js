
var time = setInterval(function loop(){
    console.log("i will loop forver!");
},500);
setTimeout(function(){
    console.log("Game over");
    clearInterval(time);
},5000);
