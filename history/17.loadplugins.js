var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
var $ = require('./gulp-load-plugins')();

gulp.task('uglify',function(){
    return gulp.src(['app/js/*.js','!app/js/tmp.js'])
        .pipe($.concat('app.js')) //把多个JS文件合并成一个文件
        .pipe($.uglify()) //对合并后的app.js文件进行压缩
        .pipe(gulp.dest('dist/js')); //输出到目的地
});

gulp.task('default',['uglify']);