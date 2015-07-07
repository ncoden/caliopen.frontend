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
      application.register('service:privacyIndex', Ember.Service.extend({formatRange: '20:70'}));
      application.inject('adapter', 'importance', 'service:importance');
      application.inject('adapter', 'privacyIndex', 'service:privacyIndex');

      application.deferReadiness();
    });
  },
  tearDown: function () {
    Ember.run(application, 'destroy');
  }
});

test('Dummy adapter should have X-CALIOPEN-IMPORTANCE header', function(assert) {
  assert.expect(1);
  var adapter = container.lookup('adapter:dummy');
  Ember.run(function() {
    assert.equal('10:50', adapter.get('headers.X-CALIOPEN-IMPORTANCE'));
  });
});
test('Dummy adapter should update X-CALIOPEN-IMPORTANCE header', function(assert) {
  assert.expect(2);
  var importance = container.lookup('service:importance');
  var adapter = container.lookup('adapter:dummy');

  Ember.run(function() {
    assert.equal('10:50', adapter.get('headers.X-CALIOPEN-IMPORTANCE'));
    Ember.run(function() {
      importance.set('formatRange', '0:100');
      Ember.run(function() {
        assert.equal('0:100', adapter.get('headers.X-CALIOPEN-IMPORTANCE'));
      });
    });
  });
});


test('Dummy adapter should have X-CALIOPEN-PRIVACY-INDEX header', function(assert) {
  assert.expect(1);
  var adapter = container.lookup('adapter:dummy');
  Ember.run(function() {
    assert.equal('20:70', adapter.get('headers.X-CALIOPEN-PRIVACY-INDEX'));
  });
});
test('Dummy adapter should update X-CALIOPEN-PRIVACY-INDEX header', function(assert) {
  assert.expect(2);
  var privacyIndex = container.lookup('service:privacyIndex');
  var adapter = container.lookup('adapter:dummy');

  Ember.run(function() {
    assert.equal('20:70', adapter.get('headers.X-CALIOPEN-PRIVACY-INDEX'));
    Ember.run(function() {
      privacyIndex.set('formatRange', '0:100');
      Ember.run(function() {
        assert.equal('0:100', adapter.get('headers.X-CALIOPEN-PRIVACY-INDEX'));
      });
    });
  });
});
