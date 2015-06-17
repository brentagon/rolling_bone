import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['artists'],
  actions: {
    addAlbum: function() {
      var controller = this;
      this.store.find('artist', {'name': this.get('artist')}).then(function(artists) {

        // TODO: this.store.find('artist', {'name': this.get('artist')}) always returns the full list of objects. Make this not so.

        debugger;

        var newArtist = controller.store.createRecord('artist', {
          name: controller.get('artist')
        });

        var newAlbum = controller.store.createRecord('album', {
          title: controller.get('title'),
          artist: newArtist
        });

        newAlbum.save().then(function() {
          newArtist.get('albums').pushObject(newAlbum);
          newArtist.save().then(function() {
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
