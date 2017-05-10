import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poolstrategy-selector', 'Integration | Component | poolstrategy selector', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poolstrategy-selector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#poolstrategy-selector}}
      template block text
    {{/poolstrategy-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
