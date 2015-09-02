/**
 * This is the applicaiton layout with tabs and sliders.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['caliopen-layout__tabs'],

  tabViews: Ember.inject.service('tab-views'),

  tabs: Ember.computed('tabViews.tabs', {
    get: function() {
      return this.get('tabViews.tabs');
    }
  }),

  currentApplication: null,
  actions: {
    remove: function(tab) {
      this.sendAction('remove', tab);
      this.get('tabViews').removeTab(tab);
    }
  }
});
