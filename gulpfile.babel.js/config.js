import child from 'child_process';
import yargs from 'yargs';
import path from 'path';

const exec = child.exec;
const argv = yargs.argv;
const root = './src/';
const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  app: [`${root}/app/root.module.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: [`${root}/styles/**/*.scss`,`${root}/app/components/**/*.scss`],
  static: [
    `${root}/index.html`,
    `${root}/fonts/**/*`,
    `${root}/images/**/*`
  ]
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

export default config;
