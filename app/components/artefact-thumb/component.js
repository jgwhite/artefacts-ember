import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'artefact-thumb',
  classNameBindings: ['isEditing:artefact-thumb--is-editing'],

  artefact: null,
  isEditing: false,

  router: computed(function() {
    return this.container.lookup('router:main');
  }),

  actions: {
    view() {
      let artefact = this.get('artefact');
      let router = this.get('router');

      router.transitionTo('project.artefact', artefact);
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
