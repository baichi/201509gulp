var gulp = require('gulp');
//引入less插件
var less = require('gulp-less');
//NODE中处理路径的模块
var path = require('path');

gulp.task('less', function () {
    //先指定less源文件的路径
    return gulp.src('./less/**/*.less')
        //导入到less插件中进行编译
        .pipe(less())
        //输出到public/css目录下
        .pipe(gulp.dest('./public/css'));
});
