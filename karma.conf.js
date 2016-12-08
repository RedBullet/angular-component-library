var istanbul = require('browserify-istanbul');
// Karma configuration
// Generated on Fri Nov 21 2014 13:33:54 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // note the browserify framework is required
    frameworks: ['mocha', 'sinon-chai', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'src/app/app.js',
      'node_modules/angular-mocks/angular-mocks.js',
      // the instrumented code from istanbul
      'src/app/**/*.spec.js',
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/app/**/*.spec.js': ['browserify', 'sourcemap'],
      'src/app/app.js': ['browserify', 'sourcemap'],
    },

    browserify: {
      transform: [
        ['babelify', {presets: ['es2015']}],
      ],
      debug: true,

      // don't forget to register the extensions
      extensions: ['.js']
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // here the coverage reporter would be running to output the final coverage report
    reporters: ['mocha', 'progress', 'coverage', 'threshold'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browserNoActivityTimeout: 20000,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    coverageReporter: {
      reporters:[
        {type: 'text'},
        {type: 'text-summary'}
      ]
    },

    thresholdReporter: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
