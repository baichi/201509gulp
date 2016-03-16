var gulp = require('gulp');
var fs = require('fs');

gulp.task('uglify', function () {
    console.log('uglify');
});
gulp.task('reload', function () {
    console.log('reload');
});

gulp.task('default',function(){
    /**
     * 观察文件的变化
     * 当文件发生新增加，修改，删除的时候执行对应任务
     */
    //gulp.watch('app/**/*.js', ['uglify', 'reload']);

    //当文件发生变化之后执行回调函数
    gulp.watch('app/**/*.js', function(event){
        console.log(event.type); //变化类型 added为新增,deleted为删除，changed为改变
        console.log(event.path); //变化的文件的路径
    });

});
