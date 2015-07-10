import Ember from 'ember';
import DS from 'ember-data';
import { initialize } from '../../../initializers/importance';
import { module, test } from 'qunit';

var container, application;

module('ImportanceInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.register('adapter:application', DS.RESTAdapter.extend({}));
      application.deferReadiness();
    });
  },
  tearDown: function () {
    Ember.run(application, 'destroy');
  }
});

test('Add service to adapter:application', function(assert) {
  initialize(container, application);

  Ember.run(function() {
    var adapter = container.lookup('adapter:application');
    assert.ok(adapter.importance);
    assert.ok(adapter.get('importance'));
  });
});

