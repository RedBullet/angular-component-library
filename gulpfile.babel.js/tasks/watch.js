import gulp from 'gulp';
import config from '../config';

gulp.task('watch', [], () => {
  gulp.watch([config.paths.scripts], ['scripts:dev']);
  gulp.watch(config.paths.styles, ['styles']);
});
