import gulp from 'gulp';
import config from '../config';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import istanbulTransform from 'browserify-babel-istanbul';
import { Server as karmaServer } from 'karma';
import glob from 'glob';

gulp.task('test',['build-instrument'] , (done) => {
  const server = new karmaServer({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, () => {done()});

  server.start();
});

//instruments the code to be
gulp.task('build-instrument', () => {
  var files = glob.sync(config.paths.test.files, {
    ignore: config.paths.test.tests
  });

  return browserify({
    debug: true
  })
  .add(files)
  .transform(istanbulTransform({
    ignore: ['**/node_modules/**', config.paths.test.tests],
  }))
  .bundle()
  .pipe(source('instrument.js'))
  .pipe(gulp.dest(config.paths.test.instrument))
});
