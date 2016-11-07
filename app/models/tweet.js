import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  followers: DS.attr('number'),
  location: DS.attr('string'),
  verified: DS.attr('boolean', {defaultValue: false}),

  info: Ember.computed.uniq('location'),
  renderLocations: Ember.computed('info', function(){
    return `${this.get('info')}`
  })
})
