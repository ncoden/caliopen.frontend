import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    /**
     * Returns the different attributes
     */
    model: function () {
        var tags = [{id: 'tag1', title: 'tag1'}];
        return Ember.RSVP.hash({
          tags,
          user: this.get('session.secure')
        });
    },

    setupController: function (controller, model) {
      controller.setProperties(model);
    },
    actions: {
     closeTab: function() { }
    }
});
