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

  return {
    name: name,
    docs: createTemplateFromMarkdown(`${config.paths.components}/${type}/${component}/Readme.md`, component, type),
  };
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

    return templateSrc;
  }

  return undefined;
}

function createDirIfNotExist(dir) {
  if (!fs.statSync(dir).isDirectory()) {
    fs.mkdirSync(dir);
  }
}

gulp.task('styleguide', () => {
  const folders = getFolders(config.paths.components);
  const data = folders.map(mapTypes);
  const dir = `${config.paths.dist}/docs`;

  createDirIfNotExist(dir);
  fs.writeFileSync(`${dir}/components.json`, JSON.stringify(data, null, 2)); // eslint-disable-line angular/json-functions

  // console.log(data[0].components);
});
