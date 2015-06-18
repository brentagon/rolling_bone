import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('album').then(function(allAlbums) {
      return Promise.all(allAlbums.map(function(theAlbum) {
        var url_albums = 'https://api.discogs.com/database/search?release_id=' + theAlbum.get('discogsId') + '&token=FlOvGcZADMoHMGuNNhOsyPSqiLIZBqZQZbatvtML';
        return Ember.$.getJSON(url_albums).then(function(responseJSON) {
          return responseJSON.results[0];
        });
      }));
    });
  }
});
