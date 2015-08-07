import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  src: computed('file', function() {
    let file = this.get('file');

    if (file) {
      return URL.createObjectURL(file);
    }
  })
});
