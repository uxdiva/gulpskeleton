var gulp = require('gulp'),
  mkdirs = require('directory-structure'),
  config = require('../config'),
  mkdirp = require('mkdirp'),
  customPlumber = require('../functions/plumber.js');

gulp.task('setup', function(){
  mkdirp('./src', function (err) {
      if (err) console.error(err)
      else console.log('src...')
  });
  mkdirs('./src/', ['pug', 'stylus', 'js', 'img'], function (err) {
    if (err) customPlumber('Error running build pug')
    console.log(' top level done!')
  })
  mkdirs(config.paths.pug.dir, ['pages', 'layouts', 'parts'], function (err) {
    if (err) customPlumber('Error running build pug')
    console.log(' pug ...')
  })
  mkdirp(config.paths.pug.dir + '/layouts/global', function (err) {
      if (err) console.error(err)
      else console.log('pug done!')
  });
  mkdirs(config.paths.css.dir, ['base', 'layouts'], function (err) {
    if (err) customPlumber('Error running build pug')
    console.log(' stylus...')
  })
  mkdirs(config.paths.css.dir + '/layouts', ['global', 'pages', 'parts'], function (err) {
    if (err) customPlumber('Error running build pug')
    console.log(' stylus done!')
  })
})
