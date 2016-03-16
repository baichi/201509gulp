var gulp = require('gulp');
var fs = require('fs');
/**
 * 定义一个名字叫one的任务
 */
var num=0;
//一定要等回调函数执行完成之后才能继续后续的任务
gulp.task('one',function(callback){
    //把one.txt里面的内容读出来
    //指定文件路径，指定编码，回调函数 data就是文件的内容的字符串了
    //异步回调函数一定会在所有的同步方法执行完毕才执行
   fs.readFile('./one.txt','utf8',function(err,data){
       //throw Error('error');
       num =  parseInt(data);
       //只有当调用callback的时候，gulp才会认为这个任务真正完成了，才可以执行后续的任务
       callback();
   })
});

gulp.task('two',['one'],function(){
    //上一次的结果乘以2
    num*=2;
});

gulp.task('three',['two'],function(){
    //把上一次的结果乘以3
    num*=3;
});

gulp.task('default',['three'],function(){
    // 输出最终的结果
    console.log(num);
});
