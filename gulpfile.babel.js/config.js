import child from 'child_process';
import yargs from 'yargs';
import path from 'path';

const exec = child.exec;
const argv = yargs.argv;
const root = './src';
const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  app: [`${root}/app/app.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: [`${root}/styles/**/*.scss`,`${root}/app/components/**/*.scss`,`${root}/app/styleguide/**/*.scss`],
  styleguideFiles: [`${root}/app/**/*.md`, `${root}/app/**/*.schema.json`],
  static: [
    `${root}/index.html`,
    `${root}/fonts/**/*`,
    `${root}/images/**/*`
  ],
  components: `${root}/app/components`,
  test: {
    tests: '**/*.spec.js',
    files: 'src/app/**/*.js',
    instrument: '.tmp/'
  }
};

const config = {
  exec,
  argv,
  root,
  paths,
};

config.scssLint = {
  src: config.paths.styles,
  options: {
    config: path.join(__dirname, '../.scss-lint.yml'),
  },
};

config.eslint = {
  src: config.paths.scripts,
};

config.styleguide = {
  components: {
    src: config.paths.components,
  }
};

export default config;
