import gulp from 'gulp';
import config from '../config';
import concat from 'gulp-concat';
import ngAnnotate from 'gulp-ng-annotate';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import wrap from 'gulp-wrap';

gulp.task('scripts', ['modules'], () => {
  return gulp.src([
      `!${config.root}/app/**/*.spec.js`,
      `${config.root}/app/**/*.module.js`,
      ...config.paths.scripts,
      './templates.js'
    ])
    .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulpif(config.argv.deploy, uglify()))
    .pipe(gulp.dest(config.paths.dist + 'js/'));
});
