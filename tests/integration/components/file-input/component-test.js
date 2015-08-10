import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('file-input', 'Integration | Component | file input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{file-input}}`);

  assert.ok(this.$('input[type="file"]').length);
});
