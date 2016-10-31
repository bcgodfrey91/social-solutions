import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hashtag-info', { path: '/' }, function() {
    this.route('hashtag');
  });
});

export default Router;
