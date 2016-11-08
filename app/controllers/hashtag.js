import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Controller.extend({
  // grabbing model info
  tweets: computed.alias('model'),
  userLocations: computed.mapBy('tweets', 'location'),
  getFollowers: computed.mapBy('tweets', 'followers'),
  //doing things with info
  isVerified: computed.filterBy('tweets', 'verified', true),
  getMinFollowers: computed.min('getFollowers'),
  getMaxFollowers: computed.max('getFollowers'),
  sumAllFollowers: computed.sum('getFollowers'),
  findAverageFollowers: computed('sumAllFollowers', function() {
    let sumAllFollowers = get(this, 'sumAllFollowers')

    return (sumAllFollowers / 100).toFixed(0)
  }),

  uniqLocations: computed.uniq('userLocations')
});

//
