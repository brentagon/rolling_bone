import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('albums', function() {
    this.route('new');
  });
  this.resource('album', {path: '/albums/:album_id'}, function() {
    this.route('new-review');
  });
  this.resource('search-input', function() {
    this.resource('search', {path: '/search/:artist_name'});
  });
});

export default Router;
