const gulp = require('gulp'),
watch = require('gulp-watch');
const bootstrapSourceEntryPoint = './node_modules/bootstrap/less/*.less';

gulp.task('watch', () => {
  watch(bootstrapSourceEntryPoint, () => {
    gulp.start('styles');
  })
})