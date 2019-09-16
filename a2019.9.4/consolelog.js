/**
 * 调试：
 * 1.检测代码是否执行到console.log的位置
 * 2.可以输出一些变量的值，判断程序的执行状态
 * 
 */
/**
 * 占位符：
 * %d   表示数字  
 * %s   表示字符串
 * %j   表示json数组
 * 
 */
var user = {
    username:"zhangsan",
    age:"20",
    qq:"2819361152"
}
console.log("username:%s",user.username);//s表示字符串
console.log("age:%d",user.age);//d表示数字
console.log("user:%j",user);