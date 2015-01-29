import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return this.store.find('contact');
    },

    setupController: function(controller, model) {
        controller.set('model', model);
    }
});
