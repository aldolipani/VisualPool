import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-visual-pool-view-selector', 'Integration | Component | canvas visual pool view selector', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-visual-pool-view-selector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#canvas-visual-pool-view-selector}}
      template block text
    {{/canvas-visual-pool-view-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
