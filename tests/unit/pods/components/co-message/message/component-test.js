import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import instanceInitializer from 'caliopen-frontend/instance-initializers/ember-intl';

moduleForComponent('co-message/message', 'Integration | Component | co message/message', {
  needs: [
    'service:intl',
    'ember-intl@adapter:-intl-adapter',
    'ember-intl@formatter:format-message',
    'helper:intl-get',
    'helper:format-message',
    'component:co-message/contact-icon', 'component:co-widget/date', 'component:co-widget/icon'
  ],
  setup: function () {
    instanceInitializer.initialize(this);
    const intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
  }
});

function createMessage() {
  var sender = Ember.Object.create({
    title: 'Amy Wong'
  });
  return Ember.Object.create({
    sender: sender,
    subject: 'Knowledge of the ancient Martian language'
  });
}

test('it renders', function(assert) {
  assert.expect(1);

  var component = this.subject();

  Ember.run(function() {
    component.set('message', createMessage());
  });

  this.render(hbs`{{co-message/message message=message}}`);

  assert.equal(this.$().text().replace(/[\s]+/g, ' ').trim(), 'Amy Wong, Knowledge of the ancient Martian language Knowledge of the ancient Martian language');
});
