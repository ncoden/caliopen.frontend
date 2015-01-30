import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:contact', 'ContactAdapter', {
  // Specify the other units that are required for this test.
  needs: [
    'model:contact',
    'model:contact-address',
    'model:contact-phone',
    'model:contact-email',
    'model:contact-identity',
    'model:contact/im',
    'model:contact-key',
    'model:contact-organization',
  ]
});

// Replace this with your real tests.
test('it exists', function() {
  var adapter = this.subject();
  ok(adapter);
});
