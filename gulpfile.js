var gulp = require('gulp');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var del = require('del');

var paths = {
  script: ['app/script/**/*.js', 'app/script/**/*.jsx'],
  style: 'app/style/**/*.less',
};

var resolve = {
  extensions: ['', '.js', '.jsx'],
};

gulp.task('webpack', function() {
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
  .pipe(gulp.dest('server/public/javascripts/'))
  .pipe(livereload());
});

gulp.task('less', function() {
  return gulp.src('app/style/main.less')
    .pipe(less())
    .pipe(gulp.dest('server/public/stylesheets'));
});

gulp.task('clean', function() {
  return del(['server/public/javascripts/**']);
});

gulp.task('start', function() {
  nodemon({
    script: './server/bin/www',
    env: {
      NODE_ENV: 'development',
    },
  });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.script, ['webpack']);
  gulp.watch(paths.style, ['less']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'webpack', 'less']);
