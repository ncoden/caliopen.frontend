import Ember from 'ember';
import DS from 'ember-data';
import { initialize } from '../../../initializers/privacy-index';
import { module, test } from 'qunit';

var container, application;

module('Unit | Initializer | privacy index', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.register('route:dummy', Ember.Route.extend({}));
      application.register('model:dummy', DS.Model.extend({}));
      application.register('store:dummy', DS.Store.extend({}));
      application.deferReadiness();
    });
  },
  tearDown: function () {
    Ember.run(application, 'destroy');
  }
});

// Replace this with your real tests.
test('Add service to routes', function(assert) {
  initialize(container, application);

  Ember.run(function() {
    var route = container.lookup('route:dummy');
    assert.ok(route.privacyIndex);
    assert.ok(route.get('privacyIndex'));
  });
});

// Replace this with your real tests.
test('Add service to models', function(assert) {
  initialize(container, application);

  Ember.run(function() {
    var model = container.lookup('store:dummy').createRecord('dummy', {});
    assert.ok(model.privacyIndex);
    assert.ok(model.get('privacyIndex'));
  });
});
