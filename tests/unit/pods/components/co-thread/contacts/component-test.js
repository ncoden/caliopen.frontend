import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

moduleForComponent('co-thread/contacts', 'CoThreadContactsComponent', {
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


test('it should display no contacts', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  equal(this.$().text(), '');

});


test('it should display one contact', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('contacts', [
      Ember.Object.create({ title: 'John' })
    ]);
  });

  equal(this.$().text().trim(), 'John');
});

test('it should display 4 contacts or less', function () {
  expect(1);

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

  equal(this.$().text().replace(/[\r\n]+/g, ''), 'Leela, Bender, Fry, Dr Zoïdberg');
});

test('it should display less than 5 contacts', function () {
  expect(1);

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

  equal(this.$().text().replace(/[\r\n]+/g, ''), 'Prof. Farnsworth, Leela, Bender, +2');
});
