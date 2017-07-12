# Generator-formcorp-sdk-1

This project is the base code to generate a form and style a form in formcorp. This project will work as the default theme for the company forms. It includes all the related SCSS files, JS files and all the necessary libraries and assests. The gulpfile.js will compile all the files into a few complied files. The JSON file includes all the related settings.

## Technologies used

The technologies involved in this project are listed below. Some tools need to be installed in order to depoly this project. More details will be given in the next sections.
```
HTML5&&CSS3
Javascript(inc. ES6 + jQuery)
node.js (https://nodejs.org/en/)
Sass (sass-lang.com)
Gulp (http://gulpjs.com/)
npm (https://www.npmjs.com/)
Yeoman (https://www.npmjs.com/package/yo)
Git (inc. subversions)
Unix commands (inc. symbolic linking)
```
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes. After installing the prerequisites tools and libraries, you need to edit the formID and the formToken in the index.html file to generate and style a specific form. 

### Prerequisites
```
[Yeoman](http://yeoman.io)
[npm](https://www.npmjs.com/)
[Gulp](http://gulpjs.com/)
[Git](https://git-scm.com/)
[node.js](https://nodejs.org/en/)
```

### Installing

Here is a step by step instructions to guide you install all the necessary tools in order to deploy and test the specific forms.

#### Step 1

Install [node.js](https://nodejs.org/) on your computer. Go to the node.js website to download the appropriate versions of the node.js and install it on your computer. (the node.js will include npm tool).
#### Step 2
Install [Yeoman](http://yeoman.io) then the the generator-formcorp-sdk-1 using [npm](https://www.npmjs.com/) ([node.js](https://nodejs.org/) and npm installed in the last step).

```bash
npm install -g yo
npm install -g git+https://git@github.com/mrdanjl/generator-formcorp-sdk-1.git
```

Then generate your new project in your desired directory:

```bash
yo formcorp-sdk-1
```

For development run the following in the project folder:

```
npm run serve
```

To build:

```
npm run build
```
#### Step 3
Navigate to your new project, find and open the index.html file under the app/templates/base/src/templates folder. Edit the form ID and form Token to the ones that match to your desired form on dashboard.
#### Step 4
Navigate to the directory that you created new project using npm.
Run the following commands
```
gulp serve
```
#### Step 5
Go to your desired web browser and access to "localhost:8000" to see the form that you specified.

## License

 © [Daniel Lee]()
 © [Frank Liu]()

[npm-image]: https://badge.fury.io/js/generator-formcorp-sdk-1.svg
[npm-url]: https://npmjs.org/package/generator-formcorp-sdk-1
[travis-image]: https://travis-ci.org/mrdanjl/generator-formcorp-sdk-1.svg?branch=master
[travis-url]: https://travis-ci.org/mrdanjl/generator-formcorp-sdk-1
[daviddm-image]: https://david-dm.org/mrdanjl/generator-formcorp-sdk-1.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mrdanjl/generator-formcorp-sdk-1
