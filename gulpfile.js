var gulp = require('gulp');
/**
 * 第一个参数是任务的名字
 * 第二个参数是任务的定义 当这个任务执行的时候要做的事情
 *
 */
gulp.task('hello',function(){
    console.log('你好');
});