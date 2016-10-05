import gulp from 'gulp';
import config from '../config';
import htmlmin from 'gulp-htmlmin';
import templateCache from 'gulp-angular-templatecache';
import path from 'path';

gulp.task('templates', () => {
  return gulp.src(config.paths.templates)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache({
      root: 'app',
      standalone: true,
      transformUrl: function (url) {
        return url.replace(path.dirname(url), '.');
      }
    }))
    .pipe(gulp.dest('./'));
});
