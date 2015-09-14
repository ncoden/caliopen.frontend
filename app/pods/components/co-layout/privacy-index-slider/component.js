/**
 * This is the user account related menu.
 *
 * Open links to user settings.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['co-layout__privacy-slider'],

  privacyIndex: Ember.inject.service('privacy-index'),

  // attributes
  currentApplication: null,

  max: Ember.computed('privacyIndex.max', {
    get: function () {
      return this.get('privacyIndex.max');
    }
  }),

  min: Ember.computed('privacyIndex.min', {
    get: function () {
      return this.get('privacyIndex.min');
    }
  }),

  range: Ember.computed('privacyIndex.min', 'privacyIndex.max', {
    get: function () {
      return [this.get('min'), this.get('max')];
    }
  }),

  actions: {
    updateRange: function ([min, max]) {
      this.get('privacyIndex').set('min', min);
      this.get('privacyIndex').set('max', max);
      this.sendAction('refreshStores');
    }
  }


});
