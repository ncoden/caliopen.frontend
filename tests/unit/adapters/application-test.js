import Ember from 'ember';
import ApplicationAdapter from '../../../adapters/application';
import {
  module,
  test
} from 'qunit';

var container, application;

module('ApplicationAdapter', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;

      application.register('adapter:dummy', ApplicationAdapter.extend({}));

      // Define required services
      application.register('service:importance', Ember.Service.extend({formatRange: '10:50'}));
      application.inject('adapter', 'importance', 'service:importance');

      application.deferReadiness();
    });
  },
  tearDown: function () {
    Ember.run(application, 'destroy');
  }
});

// Replace this with your real tests.
test('Dummy adapter should ave ', function(assert) {
  assert.expect(1);
  var adapter = container.lookup('adapter:dummy');
  Ember.run(function() {
    assert.equal('10:50', adapter.get('headers.X-CALIOPEN-IMPORTANCE'));
  });
});

