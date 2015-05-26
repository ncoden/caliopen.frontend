import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['caliopen-layout'],

  user: Ember.computed('session.secure', {
    get: function () {
      return this.get('session.secure');
    }
  }),

  actions: {
    signin: function () {
      this.sendAction('signin');
    },
    logout: function () {
      this.sendAction('logout');
    }
  }
});
