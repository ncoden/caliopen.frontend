import Ember from "ember";
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('co-icon', 'CoIconComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it should accept more classes', function () {
  expect(2);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('classNames', ['foo']);
  });

  equal(this.$().attr('class'), 'foo');

  Ember.run(function () {
    component.set('icon', 'envelope');
  });

  equal(this.$().attr('class'), 'foo glyphicon glyphicon-envelope');
});
