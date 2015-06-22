import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['caliopen-layout'],

  currentRouteName: null,

  // Properties
  // -------------------

  // Ember routing currentpath
  currentPath: null,
  // signin action, displays the authentication form
  signin: null,
  // logout action, used to delete current authenticatation
  logout: null,


  // Computed properties
  // -------------------

  // the current application is the main level route.
  currentApplication: Ember.computed('currentRouteName', {
    get: function () {
      var currentRoute = this.get('currentRouteName') || '';
      var application = currentRoute.split('.').shift();

      return application;
    }
  }),

  // the current logged in user
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
    },
    selectApplication: function () {
      this.sendAction('selectApplication', ...arguments);
    }
  }
});
