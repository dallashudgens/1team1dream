'use strict';

// general
var gulp = require('gulp');

// sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// images
var imagemin = require('gulp-imagemin');

// javascript
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// other
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var dust = require('gulp-dust');


var sourceDir = 'client-src';
var destDir = 'public';

var config = {
  cssSrcDir: sourceDir + '/scss',
  jsSrcDir: sourceDir + '/js',
  imgSrcDir: sourceDir + '/images',
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions'],
    cascade: true,
    remove: true
  },
  sassOptions: {
     outputStyle:  'nested' //(process.env.NODE_ENV !== ENV_PRODUCTION) ? 'nested' : 'compressed',
  }
};


gulp.task('build', ['styles', 'watch']);

gulp.task('default', function () {
  console.log('Hello, I\'m gulp');
});

gulp.task('styles', function () {
  return gulp.src(config.cssSrcDir + '/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer(config.authoprefixer))
  .pipe(gulp.dest(destDir + '/css'))
});

gulp.task('watch', ['styles'], function(){ //'browserSync',
  gulp.watch(config.cssSrcDdir + '/**/*.scss', ['styles']);
  // gulp.watch(config.jsSrcDir + '/**/*.js', browserSync.reload); //eventually have uglify/conact specific js task
  gulp.watch('views/**/*.dust', ['dustViews']);

  // Other watchers
});
