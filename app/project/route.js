import Ember from 'ember';
const { RSVP, inject } = Ember;

export default Ember.Route.extend({
  store: inject.service(),
  uploader: inject.service(),

  model(params) {
    let store = this.get('store');

    return store.findRecord('project', params.project_id);
  },

  actions: {
    addFiles(files) {
      let store = this.get('store');
      let uploader = this.get('uploader');
      let project = this.modelFor('project');
      let promises = [];

      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let promise = createArtefactFromFile(file, store, project, uploader);
        promises.push(promise);
      }

      RSVP.all(promises).then(() => project.save());
    },

    viewArtefact(artefact) {
      this.transitionTo('project.artefact', artefact);
    },

    closeArtefact() {
      this.transitionTo('project');
    },

    removeArtefact(artefact) {
      let url = artefact.get('url');
      let uploader = this.get('uploader');

      uploader.delete(url);

      artefact.destroyRecord();
      artefact.save();
    }
  }
});

function createArtefactFromFile(file, store, project, uploader) {
  let artefact = store.createRecord('artefact', {
    project,
    file,
    createdAt: file.lastModifiedDate || new Date()
  });
  let key = artefact.get('id') + '/' + file.name;

  return uploader.upload(file, key)
    .then(url => {
      artefact.set('file', null);
      artefact.set('url', url);
    })
    .then(() => artefact.save());
}
