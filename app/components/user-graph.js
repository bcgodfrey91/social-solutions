import Ember from 'ember';
import defaultTheme from '../themes/default-theme';

const totalData = 100

const { computed, get } = Ember;

export default Ember.Component.extend({

  chartData: Ember.computed(function() {

    return [{
      type: 'scatter',
      color: 'rgba(152,0,67,0.1)',
      data: get(this, 'data'),
      marker: {
        radius: 10
      },
      tooltip: {
        followPointer: false,
        pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
      }
    }];
  }),

  chartOptions: {
    chart: {
      zoomType: 'xy'
    },
    xAxis: {
      min: 0,
      max: get(this, 'value'),
      gridLineWidth: 1
    },
    yAxis: {
      min: 0,
      max: get(this, 'max'),
      minPadding: 0,
      maxPadding: 0,
    },
    title: {
      text: 'Looking At Followers of Top ' + Highcharts.numberFormat(totalData, 0, '') + ' Users'
    },
    legend: {
      enabled: false
    },
  }
});
