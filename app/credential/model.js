import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  key: attr('string'),
  secret: attr('string')
});
