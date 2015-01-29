/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    isProduction = EmberApp.env() === 'production';

var app = new EmberApp({
  lessOptions: {
    paths: [
      'bower_components/bootstrap/less'
  },
  outputPaths: {
        app: {
            // this is the expected output for caliopen.web
            html: isProduction ? 'frontend/index.html' : 'index.html'
        }
  }
});

if (isProduction) {
  // Force asset prefix for production, ie: when served by python app
  app.options.inlineContent = {
    assetPrefix: {
      content:  '/frontend/'
    }
  };
}

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/bootstrap/js/transition.js');
app.import('bower_components/bootstrap/js/affix.js');
app.import('bower_components/bootstrap/js/alert.js');
app.import('bower_components/bootstrap/js/button.js');
app.import('bower_components/bootstrap/js/carousel.js');
app.import('bower_components/bootstrap/js/collapse.js');
app.import('bower_components/bootstrap/js/dropdown.js');
app.import('bower_components/bootstrap/js/modal.js');
// popover requires tooltips
app.import('bower_components/bootstrap/js/tooltip.js');
app.import('bower_components/bootstrap/js/popover.js');
app.import('bower_components/bootstrap/js/scrollspy.js');
app.import('bower_components/bootstrap/js/tab.js');

module.exports = app.toTree();
