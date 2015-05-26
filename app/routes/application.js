import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function () {
    return Ember.RSVP.hash({});
  },

  actions: {

    /**
     * Transition to an error page.
     */
    error: function (err) {
      // FIXME find a way to do it cleaner
      console.log('err:', err);
      this.transitionTo('catchall', 'unhandled-error');
    },

    // =======================================
    // Implement ApplicationRouteMixin Methods
    // =======================================

    invalidateSession: function() {
      this.get('session').invalidate();
    },

    sessionRequiresAuthentication: function () {
      return this._super();
    },

    sessionInvalidationSucceeded: function() {
      if (!Ember.testing) {
        this.transitionTo('login');
      }
    },

    sessionAuthenticationSucceeded: function() {
      this.transitionTo('index');
    }

  },

  /**
    * Default behaviour when landing to settings is to redirect to account
    * settings.
    *
    * Taken from https://gist.github.com/nikpachoo/7369913#file-ember-redirect-js-L40
    */
  redirect: function(model, transition) {
    // If this is the index route, redirect to first item
    if( transition.targetName === 'index' ) {
      this.transitionTo('messages');
    }
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});
