'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var camelCase = require('camelcase');
var upperCamelCase = require('uppercamelcase');

const paths = {
  components: 'src/app/components',
};

module.exports = yeoman.Base.extend({

  prompting: function () {
    this.log(yosay(
      "Let's build a new component!"
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What should we call this component?',
        default: 'my-component',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component is it?',
        choices: [
          {name: 'atom', value: 'atoms'},
          {name: 'molecule', value: 'molecules'},
          {name: 'organism', value: 'organisms'},
          {name: 'template', value: 'templates'},
        ],
        default: 'atoms'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What does it do?',
      },
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.name;
      this.props = props;
      this.config.save();
    }.bind(this));

  },

  writing: function () {
    var path = paths.components + '/' + this.props.type + '/' + this.props.name;
    var props = {
      componentName: camelCase(this.props.name),
      componentNameHyph: this.props.name,
      componentClassName: upperCamelCase(this.props.name),
      description: this.props.description,
      type: this.props.type,
    }

    this.fs.copyTpl(
      this.templatePath('component.component.js'),
      this.destinationPath(path + '/' + this.props.name + '.component.js'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('component.schema.json'),
      this.destinationPath(path + '/' + this.props.name + '.schema.json'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('component.scss'),
      this.destinationPath(path + '/' + this.props.name + '.scss'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('component.spec.js'),
      this.destinationPath(path + '/' + this.props.name + '.spec.js'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(path + '/index.js'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('Readme.md'),
      this.destinationPath(path + '/Readme.md'),
      props
    );
  },

});
