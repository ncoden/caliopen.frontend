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
      return this.get('session')
        .authenticate('authenticator:custom', this.getProperties('username', 'password'))
        .then(null, function (err) {
          Ember.set(self, 'error', err);
        });
    }

  }

});
