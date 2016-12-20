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
    schema: getJson(`${path}/${component}.schema.json`),
    variants: getVariants(getJson(`${path}/${component}.data.json`), component, type),
  };
}

function getJson(src) {
  const file = getFile(src);

  if (file) {
    return JSON.parse(file); // eslint-disable-line angular/json-functions
  }

  return undefined;
}

function createTemplateFromMarkdown(src, component, type) {
  const file = getFile(src);

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

function getComponentMarkup(variation, component, type) {
  return `<${component}${createVariationAttributes(variation.data)}>${variation.content ? variation.content : ''}</${component}>`;
}

function getVariants(variants, component, type) {
  if (!variants) {
    return [];
  }

  return variants.map((variant) => {
    const html = getComponentMarkup(variant, component);
    const templateSrc = `${type}.${component}.${variant.name}.html`;
    const dir = `${config.paths.dist}/docs/templates`;

    createDirIfNotExist(dir);
    fs.writeFileSync(`${dir}/${templateSrc}`, html);

    return Object.assign(variant, {
      markup: html,
      template: `docs/templates/${templateSrc}`
    });
  });
}

function createVariationAttributes(data) {
  let attributes = '';

  for (let key in data) {
    if (typeof data[key] !== 'string') {
      attributes += ` ${s(key).dasherize().value()}=$ctrl.data.${key}`;
    } else {
      attributes += ` ${s(key).dasherize().value()}="{{$ctrl.data.${key}}}"`;
    }
  }

  return attributes;
}

function getFile(src) {
  let file;

  try {
    file = fs.readFileSync(src, 'utf8');
  } catch (err) {
    //
  }

  return file;
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
