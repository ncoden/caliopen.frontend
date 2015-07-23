import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: [],
  format: 'LLL',
  dateFormatted: Ember.computed('date', {
    get: function() {
      if (!this.get('date')) {
        return '';
      }

      return window.moment(this.date).format(this.format);
    }
  })
});
