import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('co-layout/tabbable-link-to', 'Integration | Component | co layout/tabbable link to', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{co-layout/tabbable-link-to 'test' label='test'}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#co-layout/tabbable-link-to 'test' label='test'}}
      template block text
    {{/co-layout/tabbable-link-to}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
