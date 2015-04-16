import Ember from 'ember';

export default Ember.Route.extend({
    /**
     * Returns the different attributes
     */
    model: function () {
        var tags = [{id: "tag1", title: "tag1"}];
        return { tags };
    },

    setupController: function (controller, model) {
        controller.set('attrs.user', this.modelFor('application').currentUser);
        controller.set('attrs.tags', model.tags);
    }
});
