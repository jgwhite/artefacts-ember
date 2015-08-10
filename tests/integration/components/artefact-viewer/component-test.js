import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artefact-viewer', 'Integration | Component | artefact viewer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{artefact-viewer}}`);

  assert.ok(this.$('artefact-viewer').length);
});
