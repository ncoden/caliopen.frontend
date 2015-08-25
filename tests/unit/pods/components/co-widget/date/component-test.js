import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

moduleForComponent('co-widget/date', 'CoWidgetDateComponent', {
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


test('it should display nothing', function () {
  expect(1);

  // creates the component instance
  this.subject();

  equal(this.$().text().trim(), '');
});

test('it should display default formated date', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('date', '2015-08-05');
  });

  equal(this.$().text().trim(), 'August 5, 2015 12:00 AM');
});

test('it should display defined formated date', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('date', '2015-08-05');
    component.set('format', 'll');
  });

  equal(this.$().text().trim(), 'Aug 5, 2015');
});
