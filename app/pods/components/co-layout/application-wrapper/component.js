/**
 * This is the applicaiton layout with tabs and sliders.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: [],

  privacyService: Ember.inject.service('privacy-index'),
  importanceService: Ember.inject.service('importance'),

  // attributes
  currentApplication: null,

  importance: Ember.computed('importanceService.max', 'importanceService.min', {
    get: function () {
      return {min: this.get('importanceService.min'), max: this.get('importanceService.max')};
    }
  }),

  privacy: Ember.computed('privacyService.max', 'privacyService.min', {
    get: function () {
      return {min: this.get('privacyService.min'), max: this.get('privacyService.max')};
    }
  }),

  actions: {
    closeTab: function(tab) {
      this.sendAction('closeTab', tab);
    },
    refreshStores: function() {
      this.sendAction('refreshStores');
    }
  }
});
