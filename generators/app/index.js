'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
    this.log(yosay(
      'Bienvenido al generador ' + chalk.blue('formcorp sdk 1')
    ));
  }

  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'formcorpId',
      message : 'Formcorp ID',
      validate: input => input !== '' && !isNaN(input),
    }, {
      type    : 'input',
      name    : 'authenticationKey',
      message : 'Authentication key',
      validate: input => input.length > 10,
    }, {
      type    : 'input',
      name    : 'sdkVersion',
      message : 'SDK version',
      default : '0.4.3',
    }, {
      type    : 'list',
      name    : 'branch',
      message : 'Branch',
      choices : ['Development', 'Staging', 'Live'],
    }, {
      type    : 'list',
      name    : 'pageStyle',
      message : 'Page style',
      choices : ['Multi page', 'Single page'],
    }]).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.log(this.props);
    /*this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );*/
  }

  install() {
    //this.installDependencies();
  }
};
