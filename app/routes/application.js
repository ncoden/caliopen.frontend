import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            currentUser: { name: 'John Doe' }
        };
    },

    actions: {
        error: function (err) {
            // FIXME find a way to
            console.log('err:', err);
            this.transitionTo('catchall', 'unhandled-error');
        }
    },

    setupController: function(controller, model) {
        controller.set('model', model);
        //this.controllerFor('Header').set('model', model);
    }
});
