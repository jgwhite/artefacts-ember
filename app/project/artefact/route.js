import Ember from 'ember';

export default Ember.Route.extend({
  model({ artefact_id }) {
    let project = this.modelFor('project');
    let artefacts = project.get('artefacts');
    let artefact = artefacts.findBy('id', artefact_id);

    return artefact;
  }
});
