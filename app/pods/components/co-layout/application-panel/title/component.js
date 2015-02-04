/**
 * This is the main panel title.
 *
 * Every page should define a `co-layout/application-panel/title` to display the main title.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h1',

  classNames: ['co-layout-application-panel-title']
});
