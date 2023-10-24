const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');


function appHTML() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

function appCSS() {
  return gulp.src('src/styles/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: 'compressed'
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./build/styles'));
}

function appJS() {
  return gulp.src('src/scripts/*.js')
    .pipe(babel({ presets: ['ENV'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'));
}

function appIMG() {
  return gulp.src('src/images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/imgs'));
}

gulp.task('appHTML', appHTML);
gulp.task('appCSS', appCSS);
gulp.task('appJS', appJS);
gulp.task('appIMG', appIMG);

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG
}

