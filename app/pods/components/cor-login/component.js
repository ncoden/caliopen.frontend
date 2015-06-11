/**
 * Routable component for login page.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['cor-login'],


  // properties
  loading: false,
  username: '',
  password: '',

  actions: {

    /**
     * Handle form submission
     *
     * Mostly send the action upward.
     */
    authenticate: function () {
      var self = this;
      var props = this.getProperties('username', 'password');

      return this.get('session')
        .authenticate('authenticator:custom', props)
        .then(null, function (err) {
          Ember.set(self, 'error', err.error);
        });
    }

  }

});
