import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

moduleForComponent('co-thread/thread', 'CoThreadThreadComponent', {
  // specify the other units that are required for this test
  // needs: ['component:co-widget/date']
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


test('it should has no unread messages', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {

    component.set('thread', Ember.Object.create({
      messages: [
        Ember.Object.create({ read: true }),
        Ember.Object.create({ read: true })
      ]
    }));
  });

  equal(component.get('hasUnread'), false);
});

test('it should has unread messages', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {

    component.set('thread', Ember.Object.create({
      messages: [
        Ember.Object.create({ read: true }),
        Ember.Object.create({ read: false }),
        Ember.Object.create({ read: true })
      ]
    }));
  });

  equal(component.get('hasUnread'), true);
});
