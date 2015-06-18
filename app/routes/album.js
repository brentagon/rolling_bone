import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var controller = this;
    var url_albums = 'https://api.discogs.com/database/search?release_id=' + params.album_id + '&token=FlOvGcZADMoHMGuNNhOsyPSqiLIZBqZQZbatvtML';
    return Ember.$.getJSON(url_albums).then(function(responseJSON) {
      var JSON = responseJSON.results[0];
      return controller.store.find('album').then(function(allAlbums) {
        var foundAlbum;
        allAlbums.forEach(function(individualAlbum) {
          if(individualAlbum.get('discogsId') === params.album_id) {
            foundAlbum = individualAlbum;
          }
        });
        return {
          JSON: JSON,
          reviews: foundAlbum.get('reviews'),
        };
      });
    });
  }
});
