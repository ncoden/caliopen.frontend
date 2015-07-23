import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

moduleForComponent('co-thread/date-last-message', 'CoThreadDateLastMessageComponent', {
  // specify the other units that are required for this test
  needs: ['component:co-widget/date']
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


test('it should display nothing', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('messages', []);
  });

  equal(this.$().text().trim(), '');
});

test('it should display last date', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('messages', [
      Ember.Object.create({ date: '2015-08-05' }),
      Ember.Object.create({ date: '2010-01-01' })
    ]);
  });

  equal(component.get('lastMessage.date'), '2015-08-05');
  //FIXME don't know how to render child component
  // equal(this.$().text().trim(), 'Aug 5, 2015');
});
