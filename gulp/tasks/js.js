var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync'),
  config = require('../config'),
  customPlumber = require('../functions/plumber.js');

// Compress JS
gulp.task('scripts', function(){
  gulp.src(config.paths.js.src)
  .pipe(customPlumber('Error running js uglify'))
  .pipe(uglify())
  .pipe(gulp.dest(config.paths.js.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
})
