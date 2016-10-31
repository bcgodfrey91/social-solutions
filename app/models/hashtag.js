import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  author: DS.attr('string'),
  created: DS.attr('date'),
  count: DS.attr('string')
});
