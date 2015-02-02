import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            currentUser: { name: 'John Doe' }
        };
    },

    actions: {
        error: function (err) {
            // FIXME find a way to
            console.log('err:', err);
            this.transitionTo('catchall', 'unhandled-error');
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
      if( transition.targetName === 'index'  ) {
        this.transitionTo('messages');
      }
    },

    setupController: function(controller, model) {
        controller.set('attrs', model);
        //this.controllerFor('Header').set('model', model);
    }
});
