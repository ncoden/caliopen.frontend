import Ember from 'ember';
import ContactHelper from 'caliopen-frontend/mixins/contact-helper';

export default Ember.Component.extend(ContactHelper, {
  tagName: 'div',

  classNames: ['contact-icon'],

  lettersStylesheetClass: Ember.computed('contacts.@each.title', {
    get: function () {
      if (!this.get('contacts')) {
        return [];
      }

      if (this.contacts.length > 4) {
        let letters = this.contacts.slice(0, 3).map(contact => this.getContactStylesheetClass(contact));
        letters.push(this.getStylesheetClass('plus'));

        return letters;
      }

      return this.contacts.slice(0, 4).map(contact => this.getContactStylesheetClass(contact));
    }
  }),
  iconClass: Ember.computed('contacts.length', {
    get: function() {
      if (!this.get('contacts')) {
        return '';
      }
      let length = this.contacts.slice(0, 4).length;

      return `contact-icon__letter--${length}`;
    }
  })
});
