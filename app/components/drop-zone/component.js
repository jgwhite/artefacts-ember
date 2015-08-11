import Ember from 'ember';
const { $, Component, computed, get } = Ember;

export default Component.extend({
  tagName: 'drop-zone',
  classNameBindings: ['receptiveClass'],

  receptiveClass: computed('receptive', 'receptive-class', function() {
    if (this.get('receptive')) {
      return this.get('receptive-class');
    }
  }),

  dragEnter(event) {
    let types = event.dataTransfer.types;

    if (types.contains('Files')) {
      this.set('receptive', true);
    }
  },

  dragOver(event) {
    event.preventDefault();
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
