import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        console.log('Hello');
        return {
            currentUser: { name: 'John Doe' }
        };
    },

    actions: {
        error: function () {
            this.transitionTo('catchall', "application-error");
        }
    },

    setupController: function(controller, model) {
        controller.set('model', model);
        //this.controllerFor('Header').set('model', model);
    }
});
