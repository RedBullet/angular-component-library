import gulp from 'gulp';

import './tasks/clean';
import './tasks/templates';
import './tasks/modules';
import './tasks/styles';
import './tasks/scripts';
import './tasks/serve';
import './tasks/copy';
import './tasks/watch';

gulp.task('default', [
  'copy',
  'styles',
  'serve',
  'watch'
]);

gulp.task('production', [
  'copy',
  'scripts'
]);
