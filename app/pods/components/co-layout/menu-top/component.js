import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-default', 'navbar-fixed-top'],

  actions: {
    logout: function () {
      return this.sendAction('logout');
    },
    signin: function () {
      return this.sendAction('signin');
    }
  }
});
