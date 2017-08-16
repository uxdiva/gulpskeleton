var gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  config = require('../config'),
 del = require('del');


//  clean site folder before deploy
gulp.task('cleanroot', function(cb){
  del([config.paths.project]).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});
})

// Deploy to GH-Pages
gulp.task('gh-pages', function() {
  return gulp.src(config.paths.project + "*/**")
    .pipe(ghPages());
});

gulp.task('deploy',['cleanroot', 'gh-pages'], function(){
  console.log('Site Deployed')
})
