var gulp = require('gulp');
var less = require('gulp-less');
//在文件的顶部去包含这个插件，起个名字，叫做 minify
var minify = require('gulp-minify-css');
//引入重命名的插件
var rename = require('gulp-rename');

gulp.task('minify',function(){
    return gulp.src('less/**/*.less')//指定 less文件
        .pipe(less())//把less编译成css
        .pipe(gulp.dest('dist/css'))//输出到目的地
        .pipe(minify())//对 css再进行压缩
        .pipe(rename(function (path) {
            //path.dirname += "/min"; //目录名
            path.basename += ".min";//文件名
            //path.extname = ".md" //扩展名文件后缀
        }))//重命名
        .pipe(gulp.dest('dist/css'));//输出到目的地
});

gulp.task('default',['minify']);