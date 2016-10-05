import gulp from 'gulp';
import config from '../config';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';

gulp.task('modules', ['templates'], () => {
  return gulp.src(config.paths.modules.map((item) => {
    return 'node_modules/' + item;
  }))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(config.argv.deploy, uglify()))
    .pipe(gulp.dest(config.paths.dist + 'js/'));
});
