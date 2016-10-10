import gulp from 'gulp';
import config from '../config';
import fs from 'fs';
import path from 'path';
import s from 'underscore.string';
import marked from 'marked';

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter((file) => {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

function mapTypes(type) {
  const name = s(type).capitalize().value();
  const componentFolders = getFolders(`${config.paths.components}/${type}`);
  const components = componentFolders.map((component) => { return mapComponents(component, type) });

  return {
    type: name,
    components: components,
  };
};

function mapComponents(component, type) {
  const name = s(component).capitalize().value();
  const path = `${config.paths.components}/${type}/${component}`;

  return {
    name: name,
    docs: createTemplateFromMarkdown(`${path}/Readme.md`, component, type),
    schema: getSchema(`${path}/${component}.schema.json`),
  };
}

function getSchema(src) {
  let file;
  let json;

  try {
    file = fs.readFileSync(src, 'utf8');
    json = JSON.parse(file); // eslint-disable-line angular/json-functions
  } catch (err) {
    //
  }

  return (json) ? json : undefined;
}

function createTemplateFromMarkdown(src, component, type) {
  let file;

  try {
    file = fs.readFileSync(src, 'utf8');
  } catch (err) {
    //
  }

  if (file) {
    const html = marked(file);
    const templateSrc = `${type}.${component}.html`;
    const dir = `${config.paths.dist}/docs/templates`;

    createDirIfNotExist(dir);
    fs.writeFileSync(`${dir}/${templateSrc}`, html);

    return `docs/templates/${templateSrc}`;
  }

  return undefined;
}

function createDirIfNotExist(path) {
  if (!dirExists(path)) {
    fs.mkdirSync(path);
  }
}

function dirExists(path) {
  try {
    return fs.statSync(path).isDirectory();
  } catch (err) {
    return false;
  }
}

gulp.task('styleguide', () => {
  const dir = `${config.paths.dist}/docs`;
  createDirIfNotExist(dir);

  const folders = getFolders(config.paths.components);
  const data = folders.map(mapTypes);

  fs.writeFileSync(`${dir}/components.json`, JSON.stringify(data, null, 2)); // eslint-disable-line angular/json-functions
});
