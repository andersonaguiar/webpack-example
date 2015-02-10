var config      = require('../../config');
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');

gulp.task('webpack', function() {
    return gulp.src(config.webpack.src)
      .pipe(webpack( require('../../../webpack.config.js') ))
      .pipe(gulp.dest('dist/'));
});