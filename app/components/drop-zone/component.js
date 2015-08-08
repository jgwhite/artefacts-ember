import Ember from 'ember';
const { $, get } = Ember;

export default Ember.Component.extend({
  tagName: 'drop-zone',
  classNameBindings: ['receptive:drop-zone--receptive'],

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

    this.sendAction('on-drop', files);
  }
});
