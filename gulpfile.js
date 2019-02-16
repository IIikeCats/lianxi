/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-02-16 09:06:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-02-16 09:09:46
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("cssa", function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})