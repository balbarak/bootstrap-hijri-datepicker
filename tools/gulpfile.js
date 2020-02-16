var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var gulpCopy = require('gulp-copy');
var del = require('del');

gulp.task('minify-js', ()=> {
  return gulp.src(
    [
      '../src/js/moment-with-locales.js',
      '../src/js/moment-hijri.js',
      '../src/js/bootstrap-hijri-datetimepicker.js'
    ])
    .pipe(concat('bootstrap-hijri-datetimepicker.js'))
    .pipe(minify({
      ext: {
        src: ".js",
        min: ".min.js"
      }
    }))
    .pipe(gulp.dest('../dist/js'));
});


gulp.task('minify-css', () => {
  return gulp.src('../src/css/bootstrap-datetimepicker.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('../dist/css'));
});

gulp.task('copy', () => {
  return gulp.src('../src/css/bootstrap-datetimepicker.css')
    .pipe(gulpCopy('../dist/css/',{prefix:3}))
    .pipe(gulp.dest('../dist'));
});

gulp.task('clean', () => {
  return del(['../dist/*'],{force:true});
});

gulp.task('copy-samples', () => {
  return gulp.src(['../dist/css/*.css','../dist/js/*.js'])
    .pipe(gulpCopy('../samples/',{prefix:2}))
    .pipe(gulpCopy('../doc/wwwroot/',{prefix:2}))
    .pipe(gulp.dest('../samples'));
});


exports.build = gulp.series('clean','minify-js','minify-css','copy','copy-samples');