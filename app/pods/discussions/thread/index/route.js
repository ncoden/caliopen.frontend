import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('message', this.paramsFor('discussions.thread'));
  },

  actions: {
   closeTab: function(tab) {
      if (tab.get('entity.id') === this.paramsFor('discussions.thread').thread_id) {
        this.transitionTo('discussions');
      }
    }
  }
});
