import {
  moduleFor,
  test
} from 'ember-qunit';

import Ember from "ember";
import startApp from '../../../../helpers/start-app';

var App;

moduleFor('route:settings/account', 'SettingsAccountRoute', {
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

test('it should redirect from index to profile', function () {
  expect(1);

   this.subject();

  visit('/settings').then(function() {
    ok(
      /^settings\.account\.profile\.|$/.test(currentPath()),
      currentPath() + ' should be a subnamespace of settings.account.profile'
    );
  });

});
