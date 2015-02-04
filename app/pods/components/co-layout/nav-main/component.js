/**
 * Caliopen Main Navigation Component
 * ==================================
 *
 * Navigation has 3 main zones:
 *
 * * Applications: Navigate between aplications (messages, contacts...);
 * * Actions: Access main actions from anywhere;
 *
 * Properties
 * ----------
 *
 * ### Attributes
 *
 * The `co-nav-main` component requires some attributes to work.
 *
 * * `currentRoute`: the current top level route
 * * `actions`: list of actions. An action is a JSON object with `title`,
 *   `icon` and `route`
 * * `application`: list of applications. An application is a JSON object with
 *   `title`, `icon` and `route`
 *
 * ### Computed Properties
 *
 * * `current-application`: given current route, the top level key is used as
 *   application name.
 *
 * Applications
 * ------------
 *
 * Applications are a main entry for Caliopen.
 *
 * Actions
 * -------
 *
 * Actions are located in their own navigation block.
 * Action related to current selected application is displayed as default.
 *
 */
import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['co-layout-nav-main'],

  // Properties
  // -------------------

  currentRoute: null,

  // Computed properties
  // -------------------

  // the current application is the main level route.
  currentApplication: function () {
    var currentRoute = this.get('currentRoute') || '';
    var application = currentRoute.split('.').shift();

    return application;
  }.property('currentRoute')

});
