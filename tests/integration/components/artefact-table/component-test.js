import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artefact-table', 'Integration | Component | artefact table', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{artefact-table}}`);

  assert.ok(this.$('artefact-table').length);
});
