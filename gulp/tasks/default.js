var gulp = require('gulp'),
  config = require('../config');

gulp.task('default',['pug', 'styles', 'scripts', 'images', 'browserSync'], function(){
  gulp.watch(config.paths.pug.all, ['pug'])
  gulp.watch(config.paths.css.all, ['styles'])
})
