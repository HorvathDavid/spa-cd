var gulp = require('gulp');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var del = require('del');
var rename = require('gulp-rename');

var paths = {
  script: ['app/script/**/*.js', 'app/script/**/*.jsx'],
  style: 'app/style/**/*.less',
};

var resolve = {
  extensions: ['', '.js', '.jsx'],
};

// CLIENT SIDE SCRIPTS
gulp.task('clean', function() {
  return del(['server/public/javascripts/**', '!server/public/javascripts', '!server/public/javascripts/JSXTransformer.js', '!server/public/javascripts/react.js']);
});

gulp.task('build', ['clean'], function() {
  return gulp.src('app/script/entry.js')
  .pipe(webpack({
    module:{
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
        },
      ],
    },
    resolve: resolve,
  }))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest('server/public/javascripts/'))
  .pipe(livereload());
});

gulp.task('less', function() {
  return gulp.src('app/style/main.less')
    .pipe(less())
    .pipe(gulp.dest('server/public/stylesheets'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.script, ['build']);
  gulp.watch(paths.style, ['less']);
});

// SERVER SIDE SCRIPTS
gulp.task('start', function() {
  nodemon({
    script: './server/bin/www',
    env: {
      NODE_ENV: 'development',
    },
  });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'build', 'less']);
