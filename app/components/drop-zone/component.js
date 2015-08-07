import Ember from 'ember';
const { $, get } = Ember;

export default Ember.Component.extend({
  tagName: 'drop-zone',
  classNameBindings: ['receptive:drop-zone--receptive'],

  dragOver(event) {
    event.preventDefault();
  },

  dragOver(event) {
    event.preventDefault();
    this.set('receptive', true);
  },

  dragLeave(event) {
    if (!$.contains(this.element, event.target)) {
      this.set('receptive', false);
    }
  },

  drop(event) {
    event.preventDefault();

    this.set('receptive', false);

    let files = get(event, 'dataTransfer.files') || [];

    for (let i = 0; i < files.length; i++) {
      this.sendAction('on-drop', files[i]);
    }
  }
});
