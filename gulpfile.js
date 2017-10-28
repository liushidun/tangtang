var gulp = require("gulp");

gulp.task("copyallfile",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\KingPhone"));
});

gulp.task("img",function(){
	gulp.src("img/*.jpg")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\KingPhone\\img"));
});

gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\KingPhone\\js"));
});

gulp.task("css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\KingPhone\\css"));
});
/*
 gulp.src()是读取将要处理的文件,即源文件
 pipe() 管道是如何处理该文件(如:sass编译,复制文件,压缩文件等)
 gulp.dest()是处理后的文件的路径，即目的文件
 */
var gulp = require("gulp");
gulp.task("build",["copyallfile","img","js","css"],function(){
	console.log("OK");
});

//
var gulp = require("gulp");
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/**/*",["img"]);
	gulp.watch("css/**/*",["css"]);
	gulp.watch("js/**/*",["js"]);
});
//2017/10/27
var gulp = require("gulp");
gulp.task("bulid",["copyallfile","img","js","css"],function(){
	console.log("OK");
});

var gulp = require("gulp");

gulp.task("copy-login",function(){
	gulp.src("login.html")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\KingPhone"));
});


var gulp = require("gulp");
gulp.task("copyallfile",function(){
	gulp.src("*/**/*")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\KingPhone"));
});
