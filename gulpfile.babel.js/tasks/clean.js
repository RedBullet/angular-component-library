import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', (cb) => {
  return del(config.paths.dist + '**/*', cb);
});
