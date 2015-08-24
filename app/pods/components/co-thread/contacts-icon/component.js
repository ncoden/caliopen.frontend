import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['caliopen-threads__thread__contact-icon'],

  lettersClass: Ember.computed('contacts.@each.title', {
    get: function () {
      if (!this.get('contacts')) {
        return [];
      }

      let getLetter = (contact) => {
        let letter = 'none';
        if (contact.get('title')) {
          letter = contact.get('title').substr(0, 1).toUpperCase();
        }

        if ('abcdefghijklmnopqrstuvwxyz'.toUpperCase().indexOf(letter) === -1) {
          letter = 'none';
        }

        return letter;
      };
      let getClass = (letter) => `caliopen-letter--${letter}`;

      if (this.contacts.length > 4) {
        let letters = this.contacts.slice(0, 3).map(getLetter);
        letters.push('plus');

        return letters.map(getClass);
      }

      return this.contacts.slice(0, 4).map(getLetter).map(getClass);
    }
  }),
  iconClass: Ember.computed('contacts.length', {
    get: function() {
      if (!this.get('contacts')) {
        return '';
      }
      let length = this.contacts.slice(0, 4).length;

      return `caliopen-threads__thread__contact-icon__letter--${length}`;
    }
  })
});
