import Ember from 'ember';
import defaultTheme from '../themes/default-theme';


const { computed, get } = Ember;

export default Ember.Controller.extend({
  //graph
  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Fruit eaten'
      }
    }
  },

  chartData: [
    {
      name: 'Jane',
      data: [5, 0, 20]
    },
    {
      name: 'John',
      data: [25, 30, 15]
    }
  ],

  theme: defaultTheme

});

  // grabbing model info
  tweets: computed.alias('model'),
  userLocations: computed.mapBy('tweets', 'location'),
  getFollowers: computed.mapBy('tweets', 'followers'),
  //doing things with info
  isVerified: computed.filterBy('tweets', 'verified', true),
  getMinFollowers: computed.min('getFollowers'),
  getMaxFollowers: computed.max('getFollowers'),
  sumAllFollowers: computed.sum('getFollowers'),
  findAverageFollowers: computed('sumAllFollowers', 'tweets', function() {
    let sumAllFollowers = get(this, 'sumAllFollowers')

    return (sumAllFollowers / 100).toFixed(0)
  }),

  uniqLocations: computed.uniq('userLocations')
});

//
