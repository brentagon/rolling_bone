import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['album'],
  ratings: [":D", ":)", ":|", ":(", "XO=="],
  actions: {
    addReview: function() {
      var albumId = this.get('model.JSON.id');
      var albumObject;
      var controller = this;
      this.store.find('album').then(function(albums) {

      albums.map(function(album) {
        if (albumId === parseInt(album.get('discogsId'))) {
          albumObject = album;
        }
      });

      var newReview = controller.store.createRecord('review', {
        title: controller.get('title'),
        author: controller.get('author'),
        rating: controller.get('rating'),
        body: controller.get('body'),
        album: albumObject
      });

      newReview.save().then(function() {
        albumObject.get('reviews').pushObject(newReview);

        albumObject.save().then(function() {
          controller.setProperties({
            title: '',
            author: '',
            body: ''
          });
          controller.transitionToRoute('album', albumId);
        });

      });
    });
    }
  }
});
