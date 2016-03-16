var gulp = require('gulp');
/**
 * 第一个参数是任务的名字
 * 第二个参数是任务的定义 当这个任务执行的时候要做的事情
 *
 */
gulp.task('hello',function(){
    console.log('hello');
});
/**
 * 1. 任务的名字
 * 2. 此任务执行的时候所依赖的其它任务
 */
gulp.task('world',['hello'],function(){
    console.log('world');
});