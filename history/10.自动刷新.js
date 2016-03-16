var gulp = require('gulp');
//引入connect插件
var connect = require('gulp-connect');
//拷贝html并通知浏览器重启
gulp.task('copy-html',function(){
    gulp.src('app/index.html')//指定源文件
        .pipe(gulp.dest('dist'))//拷贝到dist目录
        .pipe(connect.reload());//通知浏览器重启
});
//监控文件变化,当监控的文件发生变化时执行相应的任务
gulp.task('watch',function(){
    gulp.watch('app/index.html',['copy-html']);//当index.html文件变化时执行copy-html任务
});

//定义一个服务
gulp.task('server',function(){
    connect.server({
        root:'dist',//服务器的根目录
        port:8080, //服务器的地址，没有此配置项默认也是 8080
        livereload:true//启用实时刷新的功能
    });
});

gulp.task('default',['server','watch']);//运行此任务的时候会在8080上启动服务器，