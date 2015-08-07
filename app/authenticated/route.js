import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  firebase: inject.service(),

  beforeModel() {
    let firebase = this.get('firebase');
    let auth = firebase.getAuth();

    if (!auth) {
      this.replaceWith('sign-in');
    }
  }
});
