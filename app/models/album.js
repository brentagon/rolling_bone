import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true})
  // artist: DS.belongsTo('artist', {async: true}),
  // reviews: DS.hasMany('review', {async: true})
});
