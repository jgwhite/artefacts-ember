import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('file-preview', 'Integration | Component | file preview', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{file-preview}}`);

  assert.ok(this.$('img').length);
});
