import Ember from 'ember';

export default Ember.Mixin.create({
  getContactStylesheetClass: function(contact, letter = 'none') {
    if (!!contact.get('title')) {
      letter = contact.get('title').substr(0, 1).toUpperCase();
    }

    if ('abcdefghijklmnopqrstuvwxyz'.toUpperCase().indexOf(letter) === -1) {
      letter = 'none';
    }

    return this.getStylesheetClass(letter);
  },
  getStylesheetClass: function(letter = 'none') {
    return `caliopen-letter--${letter}`;
  }
});
