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