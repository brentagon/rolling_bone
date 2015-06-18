import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToCollection: function(id) {
      var album = this.store.createRecord('album', {
        discogsId: id
      });

      album.save();
    }
  }
});
