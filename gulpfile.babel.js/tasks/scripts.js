// import gulp from 'gulp';
// import config from '../config';
// import concat from 'gulp-concat';
// import ngAnnotate from 'gulp-ng-annotate';
// import gulpif from 'gulp-if';
// import uglify from 'gulp-uglify';
// import wrap from 'gulp-wrap';

// gulp.task('scripts', ['modules'], () => {
//   return gulp.src([
//       `!${config.root}/app/**/*.spec.js`,
//       `${config.root}/app/**/*.module.js`,
//       ...config.paths.scripts,
//       './templates.js'
//     ])
//     .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
//     .pipe(concat('bundle.js'))
//     .pipe(ngAnnotate())
//     .pipe(gulpif(config.argv.deploy, uglify()))
//     .pipe(gulp.dest(config.paths.dist + 'js/'));
// });


import gulp from 'gulp';
import path from 'path';
import browserify from 'browserify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpUtil from 'gulp-util';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import eventStream from 'event-stream';
import config from '../config';
import envify from 'loose-envify/custom';

const scripts = config.paths.app;
export const bundlers = scripts.map(script => {
  return {
    bundle: browserify(path.join(script), { debug: true }).transform(babelify),
    script,
  };
});

export function applyEnv(bundle, dev = false) {
  return bundle.transform(envify(
    { NODE_ENV: (dev ? 'development' : 'production') }
  ), { global: true });
}

export function scriptsStream(bundlerArr, dev = false, shouldThrow = true) {
  const tasks = bundlerArr.map(bundler => {
    return bundler.bundle
      .bundle()
      .on('error', (error) => {
        gulpUtil.log('Browserify Error', error);
        if (shouldThrow) {
          throw error;
        }
      })
      .pipe(source(bundler.script))
      .pipe(buffer())
      .pipe(gulpIf(dev, sourcemaps.init({ loadMaps: true })))
      .pipe(gulpIf(!dev, uglify()))
      .pipe(gulpIf(dev, sourcemaps.write('.')))
      .pipe(gulp.dest(config.paths.dist));
  });
  return eventStream.merge.apply(null, tasks);
}

function bundleScripts(bundlerArr, dev = false, shouldThrow = true) {
  const updatedBundlerArr = bundlerArr.map(bundler => {
    return { ...bundler, bundle: applyEnv(bundler.bundle, dev) };
  });
  return scriptsStream(updatedBundlerArr, dev, shouldThrow);
}

gulp.task('scripts:dev', bundleScripts.bind(null, bundlers, true));
gulp.task('scripts:prod', bundleScripts.bind(null, bundlers, false));
