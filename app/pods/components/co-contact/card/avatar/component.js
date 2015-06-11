import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',

  contact: null,
  defaultImage: 'http://placehold.it/50x50',

  attributeBindings: ['src'],

  src: Ember.computed('contact', {
    get: function () {
      var contact = this.get('contact');
      if (contact && contact.avatar_url) {
        return this.contact.avatar_url;
      }

      return this.get('defaultImage');
    }
  }),

  classNames: ['co-contact-list__card-avatar']
});
