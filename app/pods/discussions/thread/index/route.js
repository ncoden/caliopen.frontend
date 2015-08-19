import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findAll('message', { thread_id: params.thread_id });
  },

  actions: {
   closeTab: function(tab) {
      if (tab.get('entity.id') === this.paramsFor('discussions.thread').thread_id) {
        this.transitionTo('discussions');
      }
    }
  }
});
