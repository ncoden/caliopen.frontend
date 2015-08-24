/**
 * This is the application switcher located in top bar.
 *
 * Displays the currently selected application and a list of available
 * applications.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['co-layout__main-action'],

  // attributes
  currentApplication: null,
  user: null,

  actions: [
    {application: '', icon: 'plus', text: 'header.menu.action_default', route: 'index'},
    {application: 'discussions', icon: 'plus', text: 'header.menu.compose', route: 'discussions.new'},
    {application: 'contacts', icon: 'plus', text: 'header.menu.create_user', route: 'contacts.new'}
  ],

  // computed properties
  currentAction: Ember.computed('currentApplication', {
    get: function () {
      let actions = this.actions.filter((item) => {
        return item.application.length &&
                item.application === this.get('currentApplication');
      });

      if (!actions.length) {
        // No action for current application? return the default one.
        actions = this.actions.filter((item) => {
          return !item.application.length;
        });
      }

      return actions[0];
    }
  }),
});
