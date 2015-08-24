import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['caliopen-threads__thread__nb-messages', 'badge'],

  nbMessages: Ember.computed('messages.length', {
    get: function() {
      if (!this.get('messages.length')) {
        return 0;
      }

      return this.get('messages.length');
    }
  }),
  nbUnread: Ember.computed('messages.@each.read', {
    get: function() {
      if (!this.get('messages')) {
        return 0;
      }

      return this.messages.filter(message => {
        return !message.get('read');
      }).length;
    }
  })
});
