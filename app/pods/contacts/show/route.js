import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        return this.store.find('contact', params.contact_id);
    },

    actions: {
     closeTab: function(tab) {
        if (tab.get('entity.id') === this.paramsFor('contacts.show').contact_id) {
          this.transitionTo('contacts');
        }
      }
    }
});
