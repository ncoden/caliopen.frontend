import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        return this.store.find('message', { thread_id: params.thread_id });
    }
});
