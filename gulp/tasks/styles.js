const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimports = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
less = require('gulp-less');
const bootstrapSourceEntryPoint = './node_modules/bootstrap/less/bootstrap.less';

gulp.task('styles', () => {
  return gulp.src(bootstrapSourceEntryPoint)
  .pipe(less())
  .pipe(postcss([autoprefixer, cssvars, nested, cssimports, mixins, hexrgba]))
  .on('error', function(info) {
    console.log(info.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./'))
})