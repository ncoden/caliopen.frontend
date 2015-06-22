import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['nav', 'navbar-nav'],

  // attributes
  currentApplication: null,

  actions: {
    selectApplication: function () {
      this.sendAction('selectApplication', ...arguments);
    }
  }
});
