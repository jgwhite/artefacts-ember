import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  actions: {
    signOut() {
      let firebase = this.get('firebase');

      firebase.unauth();

      this.transitionTo('sign-in');
    }
  }
});
