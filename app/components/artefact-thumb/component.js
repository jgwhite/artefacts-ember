import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'artefact-thumb',

  artefact: null,
  isEditing: false,

  actions: {
    view() {
      let artefact = this.get('artefact');

      this.sendAction('on-view', artefact);
    },

    edit() {
      this.set('isEditing', true);
    },

    cancel() {
      this.set('isEditing', false);
    },

    update(attrs) {
      let artefact = this.get('artefact');

      artefact.setProperties(attrs);
      artefact.save();
    },

    remove() {
      let artefact = this.get('artefact');

      this.sendAction('on-remove', artefact);
    }
  }
});
