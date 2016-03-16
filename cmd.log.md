#安装过程
##1. 安装全局命令
```
npm install gulp -g
```
##2. 创建一个空文件夹
```
mkdir learngulp
```
##3. 进入此文件夹
```
cd learngulp
```
##4.初始化项目描述文件
```
npm init
```
一路回车就可以，不需要做任何额外的输入的配置,然后就生成了`package.json`文件，生成之后才能执行下一步
##5. 本地安装gulp
```
npm install gulp --save-dev
```
安装完成成后会在当前项目下创建一个node_modules文件夹，里面有安装好的gulp模块。
##6.在项目根目录下创建gulpfile.js文件，并在其中输入以下代码
```
var gulp = require('gulp');
/**
 * 第一个参数是任务的名字
 * 第二个参数是任务的定义 当这个任务执行的时候要做的事情
 *
 */
gulp.task('hello',function(){
    console.log('你好');
});
```
##7.执行hello任务
打开CMD窗口，并输入 `gulp hello`,就开始执行任务了

