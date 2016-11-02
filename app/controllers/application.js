import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  search: null,


  actions: {
    updateSearch(search) {
      this.set('search', search)
    },
    searchForParam() {
      this.transitionToRoute('hashtag', '#' + this.search)
    }
  }
});
