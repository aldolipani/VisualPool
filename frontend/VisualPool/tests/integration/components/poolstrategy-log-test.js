import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poolstrategy-log', 'Integration | Component | poolstrategy log', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poolstrategy-log}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#poolstrategy-log}}
      template block text
    {{/poolstrategy-log}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
