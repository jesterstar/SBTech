var gulp    = require('gulp');
var sass    = require('gulp-sass');
var	concat  = require('gulp-concat');
var	cssnano = require('gulp-cssnano');
var	rename  = require('gulp-rename');
var gutil   = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

gulp.task('webpack', function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log("[webpack]", stats.toString({
        }));
        callback();
    });
});

gulp.task('sass', function(){
    return gulp.src('assets/scss/default.+(scss|sass)')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('css-libs', ['sass'], function(){
    return gulp.src('assets/css/main.css')
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('build', ['webpack','css-libs']);


//watcher SASS
gulp.task('watch', ['css-libs', 'sass', 'webpack'], function(){
    gulp.watch('assets/scss/**/*+(scss|sass)', ['sass']);
    gulp.watch('assets/javascript/src/**/*.js', ['webpack']);
});