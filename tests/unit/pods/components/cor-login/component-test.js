import { registerIntl } from 'caliopen-frontend/initializers/ember-intl';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('cor-login', {
  // Specify the other units that are required for this test
  needs: [

    // intl
    'adapter:-intl-adapter',
    'service:intl',
    'helper:intl-get',
    'formatter:format-message',
    'locale:en'

  ],

  setup: function () {
    // depending on your test library, container will be hanging off `this`
    // or otherwise passed in as the first argument
    var container = this.container || arguments[0];
    // injects the service on to all logical factory types
    registerIntl(container);

    // set the initial intl service locale to `en-us`
    var intl = container.lookup('service:intl');
    intl.set('locales', 'en');
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
