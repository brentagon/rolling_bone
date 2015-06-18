import DS from 'ember-data';

export default DS.Model.extend({
  discogsId: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true})
});
