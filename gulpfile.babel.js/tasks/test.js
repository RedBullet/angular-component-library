import gulp from 'gulp';
import config from '../config';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import istanbulTransform from 'browserify-babel-istanbul';
import { Server as karmaServer } from 'karma';
import glob from 'glob';
import gulpUtil from 'gulp-util';

gulp.task('test',['build-instrument'] , (done) => {
  const server = new karmaServer({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, (error) => {
    if (error !== 0) {
      gulpUtil.log('Karma exited with error code ' + error);
      done();
      return process.exit(error);
    }
    done();
  });

  server.start();
});

//instruments the code to be
gulp.task('build-instrument', () => {
  var files = glob.sync(config.paths.test.files, {
    ignore: config.paths.test.tests
  });

  return browserify({
    debug: false
  })
  .add(files)
  .transform(istanbulTransform({
    ignore: ['**/node_modules/**', config.paths.test.tests],
  }))
  .bundle()
  .pipe(source('instrument.js'))
  .pipe(gulp.dest(config.paths.test.instrument))
});
