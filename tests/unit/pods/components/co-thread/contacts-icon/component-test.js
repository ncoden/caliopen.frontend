import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

const CSS_LETTER_CLASS_FORMAT = 'caliopen-letter--%s';

moduleForComponent('co-thread/contacts-icon', 'CoThreadContactsIconComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  equal(component._state, 'inDOM');
});


test('it should display no contact icons', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  equal(this.$('.caliopen-threads__thread__contact-icon__letter').length, 0);

});

test('it should display one contact icon', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('contacts', [Ember.Object.create({ title: 'John'})]);
  });

  equal(this.$('.caliopen-threads__thread__contact-icon__letter').length, 1);
});

test('it should display 4 contact icons or less', function () {
  expect(6);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('contacts', [
      Ember.Object.create({ title: 'Leela' }),
      Ember.Object.create({ title: 'Bender'}),
      Ember.Object.create({ title: 'Fry' }),
      Ember.Object.create({ title: 'Dr Zoïdberg'})
    ]);
  });

  equal(this.$('.caliopen-threads__thread__contact-icon__letter').length, 4);

  ['L', 'B', 'F', 'D'].forEach((letter) => {
    equal(this.$('.caliopen-threads__thread__contact-icon__letter').hasClass(CSS_LETTER_CLASS_FORMAT.replace('%s', letter)), true);
  });

  equal(this.$('.caliopen-threads__thread__contact-icon__letter').hasClass(CSS_LETTER_CLASS_FORMAT.replace('%s', 'plus')), false);
});

test('it should display less than 5 contact icons', function () {
  expect(2);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('contacts', [
      Ember.Object.create({ title: 'Prof. Farnsworth'}),
      Ember.Object.create({ title: 'Leela' }),
      Ember.Object.create({ title: 'Bender'}),
      Ember.Object.create({ title: 'Fry' }),
      Ember.Object.create({ title: 'Dr Zoïdberg'})
    ]);
  });

  equal(this.$('.caliopen-threads__thread__contact-icon__letter').length, 4);
  equal(this.$('.caliopen-threads__thread__contact-icon__letter').hasClass(CSS_LETTER_CLASS_FORMAT.replace('%s', 'plus')), true);
});
