import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'artefact-viewer',

  click(event) {
    if (event.target === this.element) {
      this.sendAction('on-close');
    }
  }
});
