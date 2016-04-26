'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    del = require('del'),
    fs = require('fs'),
    DEST = 'day01/js/',
    sass = require('gulp-sass'),
    less = require('gulp-less');

var browserSync =require('browser-sync').create(),
    reload = browserSync.reload,
    __dirname;

gulp.task('default', function() {
    console.log("安装好了gulp");
});
gulp.task('css', function() {
    console.log("安装好了gulp的css");
});

gulp.task('less',function() {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});


gulp.task('compress', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('gulp.js' ))
        .pipe(minify())
        .pipe(gulp.dest('src/minjs'));
});

gulp.task('del' ,function() {
    var fileNameList = fs.readdirSync(__dirname);
    console.log(fileNameList);
    del('./src/index.html');
    del('./abb/*');
});


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("day02/css"));
        //.pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);




gulp.task('rename',function() {
    console.log('lfkjdksfj');
});


gulp.task('watch', function() {
    var htmlSrc = 'src/day01/*.html',
        htmlDst = 'dist/';

    gulp.src(htmlSrc)
        .pipe(livereload(server))
        .pipe(gulp.dest(htmlDst));
    //gulp.watch('')
});



// //
//gulp.task('default', function() {
//    return gulp.src('study/js/*.js')
//        // 这会输出一个未压缩过的版本
//        .pipe(gulp.dest(DEST))
//        // 这会输出一个压缩过的并且重命名未 foo.min.js 的文件
//        .pipe(uglify())
//        .pipe(rename({ extname: 'study/minjs/*.min.js' }))
//        .pipe(gulp.dest(DEST));
//});
//
//
//gulp.task('help',function() {
//    console.log('css >> css压缩');
//    console.log('default >>  gulp成功安装');
//});;