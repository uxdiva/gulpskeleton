module.exports = {
  paths: {
    project: './site/',
    pug: {
      dir:  './src/pug',
      src: './src/pug/pages/*.pug',
      all: './src/pug/**/*.pug',
      dest: './site/'
    },
    css: {
      dir: './src/stylus',
      src: './src/stylus/styles.styl',
      all: './src/stylus/**/*.styl',
      dest: './site/stuff/'
    },
    js: {
      dir: './src/js',
      src: './src/js/js.js',
      vendor: './src/js/vendor/*.js',
      dest: './site/stuff/',
      all: './src/js/**/*.js'
    },
    image: {
      dir: './src/img',
      src: './src/img/',
      all: './src/img/**/*',
      dest: './site/stuff/img/'
    }
  },
  names: {
    css: 'styles.min.css',
    js: {
      app: 'js.min.js',
      vendor: 'vendor.min.js'
    }
  }
};
