/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'caliopen-frontend',
    podModulePrefix: 'caliopen-frontend/pods',
    environment: environment,
    baseURL: '/app/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
      }
    },

    intl: {
      defaultLocale: 'en-us',
      locales: ['en-us']
    },

    APP: {
    }
  };

  ENV['ember-simple-auth'] = {
    base: {
      authenticationRoute: 'login',
      store: 'session-store:local-storage',
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
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
