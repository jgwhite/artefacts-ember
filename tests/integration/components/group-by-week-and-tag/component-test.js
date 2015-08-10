import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('group-by-week-and-tag', 'Integration | Component | group by week and tag', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{group-by-week-and-tag}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#group-by-week-and-tag}}
      template block text
    {{/group-by-week-and-tag}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
