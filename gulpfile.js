var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', ['less']);

gulp.task('build', ['cssmin']);

gulp.task('less', function () {
    return gulp.src("./less/bootstrap.less")
        .pipe(less())
        .pipe(gulp.dest("./dist/css"));
});

gulp.task('cssmin', function () {
return gulp.src("./dist/css/bootstrap.css")
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./dist/css"));
});