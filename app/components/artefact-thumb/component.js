import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'artefact-thumb',

  artefact: null,

  actions: {
    remove() {
      let artefact = this.get('artefact');

      this.sendAction('on-remove', artefact);
    }
  }
});
