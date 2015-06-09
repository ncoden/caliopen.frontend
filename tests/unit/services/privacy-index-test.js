import { moduleFor, test } from 'ember-qunit';

moduleFor('service:privacy-index', 'Unit | Service | privacy index', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('Range compilation with initial configuration', function(assert) {
  var service = this.subject();
  assert.equal(service.get('formatRange'), '0:100');
});

test('Range compilation', function(assert) {
  var service = this.subject();
  // create cache
  service.get('formatRange');
  service.set('min', 10);
  service.set('max', 50);
  assert.equal(service.get('formatRange'), '10:50');
});
