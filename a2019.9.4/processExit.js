var arg1 = process.argv[2];
if(arg1 == "e"){
    process.exit();
}
else if(arg1 == "k"){
    process.kill(process.pid);
}
else if(arg1 == "help"){
    process.exit();
}
else{
    setTimeout(function(){
        console.log("延迟结束");
    },5000)
}