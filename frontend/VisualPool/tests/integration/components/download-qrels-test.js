import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('download-qrels', 'Integration | Component | download qrels', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{download-qrels}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#download-qrels}}
      template block text
    {{/download-qrels}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
