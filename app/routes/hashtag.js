import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON('/api/tweets-for-hashtag/'+params.hashtag)
                  .then(response => response.data);
  }
});
