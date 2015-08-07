import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  store: inject.service(),

  model(params) {
    let store = this.get('store');

    return store.findRecord('project', params.project_id);
  },

  actions: {
    addFile(file) {
      let store = this.get('store');
      let project = this.modelFor('project');
      let createdAt = new Date();

      store.createRecord('artefact', { project, createdAt, file });
    }
  }
});
