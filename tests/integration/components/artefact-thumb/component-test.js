import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artefact-thumb', 'Integration | Component | artefact thumb', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{artefact-thumb}}`);

  assert.ok(this.$('artefact-thumb').length);
});
