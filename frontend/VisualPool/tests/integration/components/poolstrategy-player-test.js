import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poolstrategy-player', 'Integration | Component | poolstrategy player', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poolstrategy-player}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#poolstrategy-player}}
      template block text
    {{/poolstrategy-player}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
