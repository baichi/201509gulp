var gulp = require('gulp');
var fs = require('fs');

gulp.task('copy-html',function(){
   //把app/index.html拷贝到dist目录下
    /**
     * 1.  src指定源文件
     * 2.  pipe 管理输出
     * 3.  dest指定输出的目录
     */
    gulp.src('app/index.html').pipe(gulp.dest('dist'));

});
