var gulp = require('gulp');
/**
 * 定义一个名字叫default的任务
 */
gulp.task('default',function(){
    gulp.src('./app/a.js')// 获取源文件，参数就是源文件的路径，针地gulpfile.js的相对路径，
        .pipe(gulp.dest('dist')); // 文件的输出路径 ，参数是输出的文件夹,目标文件夹可以事先不存在，gulp可以自动创建目标文件夹
});
