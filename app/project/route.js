import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  store: inject.service(),

  actions: {
    addFile(file) {
      let store = this.get('store');
      let project = this.modelFor('project');
      let createdAt = new Date();

      store.createRecord('artefact', { project, createdAt, file });
    }
  }
});
