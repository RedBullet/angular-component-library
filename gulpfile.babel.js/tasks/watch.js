import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['serve', 'scripts'], () => {
  gulp.watch([config.paths.scripts, config.paths.templates], ['scripts']);
  gulp.watch(config.paths.styles, ['styles']);
});
