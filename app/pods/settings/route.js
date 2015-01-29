import Ember from 'ember';

export default Ember.Route.extend({
    /**
     * Default behaviour when landing to settings is to redirect to account
     * settings.
     *
     * Taken from https://gist.github.com/nikpachoo/7369913#file-ember-redirect-js-L40
     */
    redirect: function(model, transition) {
      if( transition.targetName === this.routeName + '.index'  ) {
        this.transitionTo('settings.account');
      }
    }
});
