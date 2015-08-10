import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),
  retry: inject.service(),

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
          let transition = this.get('retry.transition');
          this.set('retry.transition', null);

          if (transition) {
            transition.retry();
          } else {
            this.transitionTo('authenticated');
          }
        }
      });
    }
  }
});
