import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAlbum: function() {
      var newAlbum = this.store.createRecord('album', {
        title: this.get('title'),
        artist: this.get('artist')
      });
      newAlbum.save();
      this.setProperties({
        title: '',
        artist: ''
      });
      this.transitionToRoute('albums');
    }
  }
});
