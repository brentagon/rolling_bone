import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://api.discogs.com/database/search?artist=' + params.artist_name + '&token=FlOvGcZADMoHMGuNNhOsyPSqiLIZBqZQZbatvtML';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
