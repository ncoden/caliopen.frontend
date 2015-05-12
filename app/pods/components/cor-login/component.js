/**
 * Routable component for login page.
 */
import Ember from 'ember';

export default Ember.Component.extend({


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
      this.get('session')
        .authenticate('authenticator:custom', this.getProperties('username', 'password'))
        .then(null, function (err) {
          Ember.set(self, 'error', err);
        });
    }

  }

});
