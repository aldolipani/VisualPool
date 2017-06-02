import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poolstrategy-stats', 'Integration | Component | poolstrategy stats', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poolstrategy-stats}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#poolstrategy-stats}}
      template block text
    {{/poolstrategy-stats}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
