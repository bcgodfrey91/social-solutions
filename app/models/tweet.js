import DS from 'ember-data';
import Ember from 'ember'

const { computed, get } = Ember;

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  followers: DS.attr('number'),
  location: DS.attr('string'),
  verified: DS.attr('boolean', {defaultValue: false})
})
