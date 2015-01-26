import Ember from 'ember';

export default Ember.Route.extend({
    /**
     * Default behaviour when landing to settings is to redirect to account
     * profile settings.
     */
    beforeModel: function() {
        this.transitionTo('settings.account.profile');
    }
});
