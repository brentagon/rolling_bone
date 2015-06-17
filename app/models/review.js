import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  rating: DS.attr('string'),
  album: DS.belongsTo('album', {async: true})
});
