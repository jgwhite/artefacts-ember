import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  artefacts: hasMany('artefact', { async: true })
});
