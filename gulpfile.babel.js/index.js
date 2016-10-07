import gulp from 'gulp';

import './tasks/clean';
import './tasks/styles';
import './tasks/scripts';
import './tasks/serve';
import './tasks/copy';
import './tasks/watch';
import './tasks/eslint';
import './tasks/scss-lint';
import './tasks/styleguide';

gulp.task('default', [
  'copy',
  'styles',
  'serve',
  'watch'
]);

gulp.task('production', [
  'copy',
  'scripts:prod'
]);

gulp.task('lint', ['eslint', 'scss-lint']);
