/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'caliopen.frontend',
    podModulePrefix: 'caliopen.frontend/pods',
    usePodsByDefault: false,
    environment: environment,
    baseURL: '/app/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // https://github.com/emberjs/ember.js/blob/master/FEATURES.md
        // Waiting for 0.11 to have those active
        //'ember-htmlbars-component-generation': true,
        //'ember-htmlbars-attribute-syntax': true
      }
    },

    APP: {
      // Configure ember-cli-i18n. For further information, see
      // https://github.com/dockyard/ember-cli-i18n#configuration
      defaultLocale: 'en'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
