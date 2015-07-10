/**
 * This is the user account related menu.
 *
 * Open links to user settings.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['co-layout__importance-slider'],

  importance: Ember.inject.service('importance'),

  // attributes
  currentApplication: null,

  max: Ember.computed('importance.max', {
    get: function () {
      return this.get('importance.max');
    }
  }),

  min: Ember.computed('importance.min', {
    get: function () {
      return this.get('importance.min');
    }
  }),

  range: Ember.computed('importance.min', 'importance.max', {
    get: function () {
      return [this.get('min'), this.get('max')];
    }
  }),

  actions: {
    updateRange: function ([min, max]) {
      this.get('importance').set('min', min);
      this.get('importance').set('max', max);
    }
  }

});
