import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row', 'caliopen-threads__thread'],
  classNameBindings: ['hasUnread:caliopen-threads__thread--unread'],

  hasUnread: Ember.computed('thread.messages.@each.read', {
    get: function() {
      if (!this.get('thread.messages')) {
        return false;
      }

      return this.get('thread.messages').isAny('read', false);
    }
  })
});
