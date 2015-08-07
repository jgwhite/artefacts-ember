import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  store: inject.service(),

  model() {
    let store = this.get('store');

    return store.findAll('project');
  }
});
