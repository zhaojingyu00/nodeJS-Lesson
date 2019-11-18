//类型错误 (TypeError)
// var username = "zhangsan";
// username();

//TypeError  类型的错误
//特定的方法的参数必须是特定类型的变量
const fs = require("fs");
fs.readFileSync(true);
