import Ember from 'ember';
import defaultTheme from '../themes/default-theme';

const totalData = 100

const { computed, get } = Ember;

export default Ember.Component.extend({

  chartOptions: {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Follower Count Breakdown'
  },
  subtitle: {
    text: 'Click the columns to view the breakdown'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total percent of follower'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
      '<b>{point.y:.2f}%</b> of total<br/>'
  },
  drilldown: {
    series: [
      {
        name: 'Less Than 1000',
        id: 'Less Than 1000',
        data: get(this, 'lessThanOneThousand')
      },
      {
        name: '1000 to 5000',
        id: '1000 to 5000',
        data: get(this, 'oneToFive')
      },
      {
        name: '5000 to 10000',
        id: '5000 to 10000',
        data: get(this, 'fiveToTen')
      },
      {
        name: '10000 to 50000',
        id: '10000 to 50000',
        data: get(this, 'tenToFifty')
      },
      {
        name: '50000 and Up',
        id: '50000 and Up',
        data: get(this, 'fiftyUp')
      }
    ]
  }
},

chartData: [
  {
    name: 'Follower Breakdown',
    colorByPoint: true,
    data: [
      {
        name: 'Less Than 1000',
        y: 56.33,
        drilldown: 'Less Than 1000'
      },
      {
        name: '1000 to 5000',
        y: 24.03,
        drilldown: '1000 to 5000'
      },
      {
        name: '5000 to 10000',
        y: 10.38,
        drilldown: '5000 to 10000'
      },
      {
        name: '10000 to 50000',
        y: 4.77,
        drilldown: '10000 to 50000'
      },
      {
        name: '50000 and Up',
        y: 0.91,
        drilldown: '50000 and Up'
      }
    ]
  }
]

});
