import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('contact', 'Contact', {
  // Specify the other units that are required for this test.
  needs: [
    'model:contact/address',
    'model:contact/phone',
    'model:contact/email',
    'model:contact/identity',
    'model:contact/im',
    'model:contact/key',
    'model:contact/organization',
    'model:thread',
    'model:message'
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
