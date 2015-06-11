import Ember from 'ember';

export default Ember.Service.extend({
    min: 0,
    max: 100,
    formatRange: Ember.computed('min', 'max', {
      get: function() {
        return this.get('min') + ':' + this.get('max');
      }
    })
});
