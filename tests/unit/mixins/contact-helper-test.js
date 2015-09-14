import Ember from 'ember';
import ContactHelperMixin from '../../../mixins/contact-helper';
import { module, test } from 'qunit';

module('Unit | Mixin | co contact first letter');


function createContactHelper() {
  var ContactHelperMixinObject = Ember.Object.extend(ContactHelperMixin);
  return ContactHelperMixinObject.create();
}

function createContact(title = '') {
  var contact = Ember.Object.create();
  contact.set('title', title);

  return contact;
}
// Replace this with your real tests.
test('it works', function(assert) {
  var subject = createContactHelper();
  assert.ok(subject);
});

test('getStylesheetClass - none letter class', function() {
  var subject = createContactHelper();
  equal(subject.getStylesheetClass(), 'caliopen-letter--none');
});

test('getContactStylesheetClass - none letter class', function() {
  var subject = createContactHelper();
  equal(subject.getContactStylesheetClass(createContact()), 'caliopen-letter--none');
});

test('getContactStylesheetClass - undefined letter class', function() {
  var subject = createContactHelper();
  equal(subject.getContactStylesheetClass(createContact('ßét@')), 'caliopen-letter--none');
});

test('getContactStylesheetClass - normal letter class', function() {
  var subject = createContactHelper();
  equal(subject.getContactStylesheetClass(createContact('beta')), 'caliopen-letter--B');
});
