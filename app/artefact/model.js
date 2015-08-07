import DS from 'ember-data';
const { Model, belongsTo } = DS;

export default DS.Model.extend({
  project: belongsTo('project', { async: true })
});
