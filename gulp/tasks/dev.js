var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  config = require('../config');

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: config.paths.project
    }
  })
})
