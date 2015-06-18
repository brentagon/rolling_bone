import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(albumTitle) {
  var titleArray = albumTitle.split(' - ');
  var artist = titleArray[0].split(' ');
  var album = titleArray[1].split(' ');
  var output;
  artist = artist.join('+');
  album = album.join('+');
  output = 'https://www.youtube.com/results?search_query=' + artist + '+' + album + '+full%2c+hd';
  return output;
});

// Turn this: Sun Araw
// Into this: sun+araw+on+patrol%2C+hd
