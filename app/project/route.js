import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  store: inject.service(),
  uploader: inject.service(),

  model(params) {
    let store = this.get('store');

    return store.findRecord('project', params.project_id);
  },

  actions: {
    addFile(file) {
      let store = this.get('store');
      let uploader = this.get('uploader');
      let project = this.modelFor('project');
      let artefact = store.createRecord('artefact', {
        project,
        createdAt: new Date(),
        file
      });

      uploader.upload(file).then(url => {
        artefact.set('file', null);
        artefact.set('url', url);
        artefact.save();
        project.save();
      });
    }
  }
});
