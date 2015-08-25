/**
 * Routable component for login page.
 */
import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['cor-login'],
  classNameBindings: ['isLoading:is-loading'],

  // services
  session: service('session'),


  // properties
  isLoading: false,
  error: null,
  username: '',
  password: '',

  actions: {

    /**
     * Handle form submission
     *
     * Mostly send the action upward.
     */
    authenticate: function () {
      this.set('isLoading', true);

      var props = this.getProperties('username', 'password');
      let resetLoading = () => this.set('isLoading', false);

      return this.get('session')
        .authenticate('authenticator:custom', props)
        .then(resetLoading, (err) => {
          resetLoading();
          this.set('error', err.error);
        });
    }

  }

});
