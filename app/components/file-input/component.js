import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['type', 'multiple', 'value'],
  type: 'file',
  multiple: false,
  value: null,

  change() {
    let files = this.element.files;

    for (let i = 0; i < files.length; i++) {
      this.sendAction('on-add', files[i]);
    }

    this.element.value = null;
  }
});
