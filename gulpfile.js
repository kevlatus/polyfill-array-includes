const {dest, task, src} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function build() {
  return src('./array-includes.js')
    .pipe(uglify())
    .pipe(rename('index.js'))
    .pipe(dest('./'));
}

task('build', build);

task('default', build);