import gulp from 'gulp';
import config from '../config.js';
import sassGlob from 'gulp-sass-glob';
import sass from 'gulp-sass';

gulp.task('styles', () => {
  return gulp.src(config.paths.styles)
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(config.paths.dist + 'styles/'));
});
