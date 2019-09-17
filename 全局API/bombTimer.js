function bomb(message){
    this.message=message,
    this.explode = function(){
        console.log(message);
    }
}
var bom = bomb("bomb!!!");
setTimeout(function(){
    explode();
},2000);



function Bomb(){
    this.message = "bomb!!!";
}
Bomb.prototype.explode = function(){
    console.log(this);//this的指向错误
    console.log(this.message);
}
var bomb = new Bomb();
setTimeout(bomb.explode.bind(bomb),2000);//通过（.bind（bomb））