import gulp from 'gulp';
import runSequence from 'run-sequence';

import './tasks/clean';
import './tasks/styles';
import './tasks/scripts';
import './tasks/serve';
import './tasks/copy';
import './tasks/watch';
import './tasks/eslint';
import './tasks/scss-lint';
import './tasks/styleguide';

gulp.task('default', (callback) => {
  runSequence('copy', ['styleguide', 'styles', 'scripts:dev', 'serve', 'watch'], callback);
});

gulp.task('production', (callback) => {
  runSequence('copy', ['scripts:prod'], callback);
});

gulp.task('lint', ['eslint', 'scss-lint']);
