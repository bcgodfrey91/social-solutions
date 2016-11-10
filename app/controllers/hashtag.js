import Ember from 'ember';
import defaultTheme from '../themes/default-theme';


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
  lessThanTenThousand: computed.filter('getFollowers', function(followers, index, array) {
    return  followers < 10000;
  }),
  lessThanOneThousand: computed.filter('getFollowers', function(followers, index, array) {
    return  followers < 1000;
  }),
  oneToFive: computed.filter('getFollowers', function(followers, index, array) {
    return  followers > 1000 && followers < 5000;
  }),
  fiveToTen: computed.filter('getFollowers', function(followers, index, array) {
    return followers > 5000 && followers < 10000;
  }),
  tenToFifty: computed.filter('getFollowers', function(followers, index, array) {
  return followers > 10000 && followers < 50000;
  }),
  fiftyUp: computed.filter('getFollowers', function(followers, index, array) {
  return followers > 50000;
  }),
  findAverageFollowers: computed('sumAllFollowers', 'tweets', function() {
    let sumAllFollowers = get(this, 'sumAllFollowers')

    return (sumAllFollowers / 100).toFixed(0)
  }),
  pieData: computed('isVerified', 'getFollowers', function(){
    return {
      labels: ['Red', "Green", "Yellow"],
      datasets: [
        {
          data: [
            get(this, 'isVerified'),
            get(this, 'getFollowers')

          ]
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
        }
      ]
    };
  }),
  uniqLocations: computed.uniq('userLocations')
});
