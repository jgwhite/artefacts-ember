import Ember from 'ember';
import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;
const { computed, inject, run } = Ember;

export default DS.Model.extend({
  project: belongsTo('project', { async: true }),
  createdAt: attr('date'),
  url: attr('string')
});
