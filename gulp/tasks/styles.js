var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  prefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  config = require('../config'),
  customPlumber = require('../functions/plumber.js');


  gulp.task('styles', function(){
    gulp.src(config.paths.css.src)
    .pipe(customPlumber('Error running styles'))
    .pipe(stylus())
    .pipe(prefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(config.paths.css.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
  })
