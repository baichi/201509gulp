var gulp = require('gulp');
/**
 * 定义一个名字叫default的任务
 */
gulp.task('default',function(){
    gulp.src('app/a.js')
        .pipe(gulp.dest('dist/foo.js'));
//最终生成的文件路径为 dist/foo.js/a.js,而不是dist/foo.js
});

gulp.task('default2',function(){
    //有通配符开始出现的那部分路径为 `**/*.js`
    // ** 匹配任何字符，包括路径分隔符
    gulp.src('app/index/*.js')
        .pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/**/*.js
//最后拷贝的路径是目标路径+通配符开始匹配的那部分路径
});
