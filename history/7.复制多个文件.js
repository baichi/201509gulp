var gulp = require('gulp');
var fs = require('fs');

gulp.task('copy-images',function(){

    //gulp.src('app/imgs/*.png').pipe(gulp.dest('dist'));

    // {png,jpg} 表示大括号中的任何一个
    //也可以使用一个数组，表示数组中的任何一个
    gulp.src(['app/imgs/**/*.{png,jpg,bmp}']).pipe(gulp.dest('dist'));

   //路径前加一个！表示排除掉这个文件
   // gulp.src(['app/js/*.js','!app/js/tmp.js']).pipe(gulp.dest('dist'));
});

gulp.task('watch-images',function(){

   gulp.watch('app/imgs/**/*.{png,jpg,bmp}',['copy-images']);
});
