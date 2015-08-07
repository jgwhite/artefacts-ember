import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  model() {
    return {
      busy: false,
      error: null
    };
  },

  actions: {
    signIn(credentials) {
      let firebase = this.get('firebase');

      this.set('currentModel.busy', true);

      firebase.authWithPassword(credentials, error => {
        this.set('currentModel.busy', false);

        if (error) {
          this.set('currentModel.error', error);
        } else {
          this.transitionTo('authenticated');
        }
      });
    }
  }
});
