var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  browserSync = require('browser-sync'),
  config = require('../config'),
  customPlumber = require('../functions/plumber.js');


gulp.task('images', function(){
  gulp.src(config.paths.image.all)
  .pipe(cache(imagemin({
    interlace: true
  })))
  .pipe(gulp.dest(config.paths.image.dest))
})
