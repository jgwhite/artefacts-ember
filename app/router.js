import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authenticated', { path: '' }, function() {
    this.route('projects', { resetNamespace: true, path: '' });
    this.route('project', { path: ':project_id', resetNamespace: true }, function() {
      this.route('artefact', { path: ':artefact_id' });
    });
  });
  this.route('sign-in');
});

export default Router;
