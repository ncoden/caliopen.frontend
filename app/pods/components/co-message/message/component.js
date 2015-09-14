import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row', 'caliopen-messages__message'],
  message: null,
  isBodyExpanded: true,
  init: function() {
    this._super.apply(this, arguments);
    this.set('isBodyExpanded', !!this.message && !this.message.get('read'));
  },
  actions: {
    toggleExpandBody: function() {
      this.set('isBodyExpanded', !this.isBodyExpanded);
    }
  }
});
