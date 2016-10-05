import gulp from 'gulp';
import config from '../config';
import debug from 'gulp-debug';

gulp.task('copy', ['clean'], () => {
  return gulp.src(config.paths.static, { base: 'src' })
    .pipe(gulp.dest(config.paths.dist));
});
