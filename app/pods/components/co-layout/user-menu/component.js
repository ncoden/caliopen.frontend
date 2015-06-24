/**
 * This is the user account related menu.
 *
 * Open links to user settings.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['nav', 'navbar-nav', 'navbar-right'],

  // attributes
  currentApplication: null,
  user: null
});
