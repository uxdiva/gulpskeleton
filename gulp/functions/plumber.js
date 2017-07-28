var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify');

function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      // Customizing error title
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>",
    })
  });
}

module.exports = customPlumber
