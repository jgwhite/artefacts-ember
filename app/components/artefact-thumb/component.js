import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'artefact-thumb',

  artefact: null,

  actions: {
    view() {
      let artefact = this.get('artefact');

      this.sendAction('on-view', artefact);
    },

    save() {
      let artefact = this.get('artefact');

      this.sendAction('on-save', artefact);
    },

    rollback() {
      let artefact = this.get('artefact');

      this.sendAction('on-rollback', artefact);
    },

    remove() {
      let artefact = this.get('artefact');

      this.sendAction('on-remove', artefact);
    }
  }
});
