import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['caliopen-threads__thread__last-message-date'],

  lastMessage: Ember.computed('messages.@each.date', function() {
    if (!this.get('messages')) {
      return;
    }
    return this.messages.toArray().sort((a, b) => {
      if (!a.get('date') || !b.get('date')) {
        return 0;
      }
      let aDate = new Date(a.get('date'));
      let bDate = new Date(b.get('date'));
      return bDate.getTime() - aDate.getTime();
    })[0];
  })
});
