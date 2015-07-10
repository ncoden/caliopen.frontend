/**
 * This is the application switcher located in top bar.
 *
 * Displays the currently selected application and a list of available
 * applications.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['nav', 'navbar-nav'],

  // attributes
  currentApplication: null
});
