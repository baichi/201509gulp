var gulp = require('gulp');
//1.引入connect模块
var connect = require('gulp-connect');
//创建一个server任务
gulp.task('server',function(){
    //启动服务
    connect.server({
        root:'dist',//服务器的根目录
        port:8080 //服务器的端口，没有此配置项默认也是 8080
    });
});

gulp.task('default',['server']); //运行此任务的时候会在8080上启动服务器，