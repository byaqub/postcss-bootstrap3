const gulp = require('gulp'),
watch = require('gulp-watch');
const bootstrapSourceEntryPoint = './bootstrap/less/*.less';

gulp.task('watch', () => {
  watch(bootstrapSourceEntryPoint, () => {
    gulp.start('styles');
  })
})