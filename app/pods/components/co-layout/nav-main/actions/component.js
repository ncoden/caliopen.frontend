import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'ul',

  classNames: ['co-layout-nav-main-actions'],

  currentApplication: null,

  activeClassName: 'co-layout-nav-main-actions__action_active',

  updateMainAction: function () {
    this
        .$('[data-application]:not([data-application="default"])')
        .removeClass(this.activeClassName);
    this
        .$(`[data-application="${this.get('currentApplication')}"]`)
        .addClass(this.activeClassName);
  },


  didInsertElement: function () {
    this.updateMainAction();
    // ensure default is active
    this
        .$('[data-application="default"]')
        .addClass(this.activeClassName);
  },

  applicationDidChange: function () {
    this.updateMainAction();
  }.observes('currentApplication')

});
