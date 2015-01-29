import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from "ember";

moduleForComponent('co-contact-card-avatar', 'CoContactCardAvatarComponent', {
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


test('it should change url', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('contact', {avatar_url: '/foo'});
  });

  equal(this.$().attr('src'), '/foo');

});


test('it should use default image', function () {
  expect(1);

  // creates the component instance
  var component = this.subject();

  Ember.run(function () {
    component.set('defaultImage', '/default');
    component.set('contact', null);
  });

  equal(this.$().attr('src'), '/default');
});
