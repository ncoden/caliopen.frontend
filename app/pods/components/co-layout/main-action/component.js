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

  /**
   * A list of possible
   */
  menuEntries: [
    {application: '', icon: 'plus', text: 'header.menu.action_default', route: 'index'},
    {application: 'discussions', icon: 'plus', text: 'header.menu.compose', route: 'discussions.new'},
    {application: 'contacts', icon: 'plus', text: 'header.menu.create_user', route: 'contacts.new'}
  ],

  // computed properties
  currentAction: Ember.computed('currentApplication', {
    get: function () {
      let entries = this.get('menuEntries');
      entries = entries.filter((item) => {
        return item.application.length &&
                item.application === this.get('currentApplication');
      });

      if (!entries.length) {
        // No action for current application? return the default one.
        entries = this.get('menuEntries').filter((item) => {
          return !item.application.length;
        });
      }

      return entries[0];
    }
  }),
});
