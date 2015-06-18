import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['artists'],
  actions: {
    addAlbum: function() {
      var controller = this;
      var artist = this.get('artist');
      var albumArtist;
      this.store.find('artist').then(function(artists) {

        var filteredArtist = artists.filterBy('name', artist);

        if(filteredArtist.get('length') === 0) {
          albumArtist = controller.store.createRecord('artist', {
            name: controller.get('artist')
          });
        } else {
          albumArtist = artists.filterBy('name', artist).get('firstObject');
        }

        var newAlbum = controller.store.createRecord('album', {
          title: controller.get('title'),
          artist: albumArtist
        });

        newAlbum.save().then(function() {
          albumArtist.get('albums').pushObject(newAlbum);
          albumArtist.save().then(function() {
            controller.setProperties({
              title: '',
              artist: ''
            });
            controller.transitionToRoute('albums');
          });
        });
      });

    }
  }
});
