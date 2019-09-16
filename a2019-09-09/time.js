
var timerId = setInterval(function(){
    console.log("game over");
},3000);
//阻止延迟执行和定时执行，回调函数的执行

// clearTimeout(timerId);
 timerId.unref();//跳出循环
 timerId.ref();//重新开始