import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAlbum: function() {

      var newArtist = this.store.createRecord('artist', {
        name: this.get('artist')
      });

      var newAlbum = this.store.createRecord('album', {
        title: this.get('title'),
        artist: newArtist
      });

      newAlbum.save().then(function() {
        newArtist.get('albums').pushObject(newAlbum);
        newArtist.save().then(function() {
          this.setProperties({
            title: '',
            artist: ''
          });
          this.transitionToRoute('albums');
        });
      });

    }
  }
});
