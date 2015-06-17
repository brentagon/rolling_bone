import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['album'],
  ratings: [":D", ":)", ":|", ":(", "XO=="],
  actions: {
    addReview: function() {
      var album = this.get('controllers.album.model');
      var newReview = this.store.createRecord('review', {
          title: this.get('title'),
          author: this.get('author'),
          rating: this.get('rating'),
          body: this.get('body'),
          album: album
      });
      newReview.save().then(function() {
        album.get('reviews').pushObject(newReview);

        album.save().then(function() {
          this.setProperties({
            title: '',
            author: '',
            body: ''
          });
          this.transitionToRoute('album', album);
        });


      });
    }
  }
});
