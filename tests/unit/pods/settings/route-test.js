import {
  moduleFor,
  test
} from 'ember-qunit';

import Ember from "ember";
import startApp from '../../../helpers/start-app';

var App;

moduleFor('route:settings', 'SettingsRoute', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('it should redirect from index to account', function () {
  expect(1);

  var route = this.subject();

  visit('/settings').then(function() {
    ok(
      /^settings\.account\.|$/.test(currentPath()),
      currentPath() + ' should be a subnamespace of settings.account'
    );
  });

});
