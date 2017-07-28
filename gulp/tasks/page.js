var gulp = require('gulp'),
  pug = require('gulp-pug'),
  browserSync = require('browser-sync'),
  config = require('../config'),
  customPlumber = require('../functions/plumber.js');

gulp.task('pug', function(){
  gulp.src(config.paths.pug.src)
  .pipe(customPlumber('Error running pug'))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.paths.pug.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
})
