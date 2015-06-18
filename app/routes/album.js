import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var albumJSONandReviews;
    var controller = this;
    var url_albums = 'https://api.discogs.com/database/search?release_id=' + params.album_id + '&token=FlOvGcZADMoHMGuNNhOsyPSqiLIZBqZQZbatvtML';
    return Ember.$.getJSON(url_albums).then(function(responseJSON) {
      return albumJSONandReviews = {
        JSON: responseJSON.results[0],
        reviews: controller.store.find('album', params.album_id).then(function(foundAlbum) {
          return foundAlbum.get('reviews');
        })
      };
    }).then(function() {
      debugger;
    return albumJSONandReviews;
  });
  }
});
