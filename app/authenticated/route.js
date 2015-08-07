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
  },

  afterModel() {
    let store = this.get('store');

    return store.findRecord('credential', 'aws').then(credentials => {
      let { key, secret } = credentials.getProperties('key', 'secret');
      let awsCredentials = new AWS.Credentials(key, secret);

      AWS.config.credentials = awsCredentials;
      AWS.config.region = 'eu-west-1';
    });
  }
});
