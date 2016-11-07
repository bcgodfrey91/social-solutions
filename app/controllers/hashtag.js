import Ember from 'ember';

export default Ember.Controller.extend({

  isVerified: Ember.computed.filterBy('model', 'verified', true),


});
