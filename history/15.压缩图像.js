var gulp = require('gulp');
//引入压缩图片的插件
var imagemin = require('gulp-imagemin');

gulp.task('copy-images',function(){
    return gulp.src('app/imgs/**/*.{jpg,png,bmp}')//指定要压缩的图片
        .pipe(imagemin()) //进行图片压缩
        .pipe(gulp.dest('dist'));//输出目的地
});

gulp.task('default',['copy-images']);