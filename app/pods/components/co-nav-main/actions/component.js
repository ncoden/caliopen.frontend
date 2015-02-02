import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'ul',

  classNames: ['co-nav-main-actions'],

  currentApplication: null,

  updateMainAction: function () {
    this
        .$('[data-application]:not([data-application="default"])')
        .removeClass('co-nav-main-actions__action_active');
    this
        .$(`[data-application="${this.get('currentApplication')}"]`)
        .addClass('co-nav-main-actions__action_active');
  },


  didInsertElement: function () {
    this.updateMainAction();
    // ensure default is active
    this
        .$('[data-application="default"]')
        .addClass('co-nav-main-actions__action_active');
  },

  applicationDidChange: function () {
    this.updateMainAction();
  }.observes('currentApplication')

});
