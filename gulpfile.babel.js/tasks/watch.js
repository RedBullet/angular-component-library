import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['serve', 'scripts:dev'], () => {
  gulp.watch([config.paths.scripts, config.paths.templates], ['scripts:dev']);
  gulp.watch(config.paths.styles, ['styles']);
});
