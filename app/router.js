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
  this.route('artists');
  this.resource('artist', {path:'/artists/:artist_id'})
});

export default Router;
