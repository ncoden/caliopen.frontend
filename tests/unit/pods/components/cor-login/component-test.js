import {
  moduleForComponent,
  test
} from 'ember-qunit';
import instanceInitializer from 'caliopen-frontend/instance-initializers/ember-intl';

moduleForComponent('cor-login', {
  unit: true,
  // Specify the other units that are required for this test
  needs: [

    // intl
    'service:intl',
    'ember-intl@adapter:-intl-adapter',
    'ember-intl@formatter:format-message',
    'helper:intl-get',
    'helper:format-message',

  ],

  setup: function () {
    instanceInitializer.initialize(this);
    const intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
  }

});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
