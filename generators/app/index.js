'use strict';
const Generator = require('yeoman-generator');
const chalk     = require('chalk');
const yosay     = require('yosay');
const mkdirp    = require('mkdirp');

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
      name    : 'name',
      message : 'Project name',
      default : this.appname,
    },{
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
    },{
      type    : 'list',
      name    : 'pageStyle',
      message : 'Page style',
      choices : ['Multi page', 'Single page'],
    }]).then((props) => {
      this.props = props;
    });
  }

  configuring() {
    this.destinationRoot(this.destinationPath(this.props.name));
  }

  writing() {
    mkdirp(this.destinationPath(), err => {
      if (err) {
        this.log(chalk.red(err));
      } else {
        this.log(`Working directory: ${chalk.blue(this.destinationPath())}`);

        // copy base
        this.fs.copyTpl(
          this.templatePath('base/**/*'),
          this.destinationPath(),
          this.props
        );

        this.fs.copy(
          this.templatePath('base/.*'),
          this.destinationPath()
        );

      }
    });
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
