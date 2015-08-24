import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

moduleForComponent('co-thread/count-messages', 'CoThreadCountMessagesComponent', {
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


test('it should display 0 messages', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('messages', []);
  });

  equal(this.$().text().trim(), '0');
});

test('it should display number of read messages', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('messages', [
      Ember.Object.create({ read: true }),
      Ember.Object.create({ read: true })
    ]);
  });

  equal(this.$().text().trim(), '2');
});


test('it should display number of unread messages', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('messages', [
      Ember.Object.create({ read: true }),
      Ember.Object.create({ read: false }),
      Ember.Object.create({ read: false })
    ]);
  });

  equal(this.$().text().replace(/[\r\n]+/g, ''), '2/3');
});
