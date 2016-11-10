import Ember from 'ember';

export default Ember.Controller.extend({
  search: null,
  onHome: true,


  actions: {
    updateSearch(search) {
      this.set('search', search.replace(/ +/,''))
    },
    searchForParam() {
      this.store.unloadAll()
      this.set('onHome', false)
      this.transitionToRoute('hashtag', '#' + this.search)
    },
    goHome() {
      this.set('onHome', true)
    }
  }
});
