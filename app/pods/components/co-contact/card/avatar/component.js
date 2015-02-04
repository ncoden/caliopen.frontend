import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',

  contact: null,
  defaultImage: 'http://placehold.it/50x50',

  attributeBindings: ['src'],

  src: function () {
    var contact = this.get('contact');
    if (contact && contact.avatar_url) {
      return this.contact.avatar_url;
    }

    return this.get('defaultImage');
  }.property('contact'),

  classNames: ['co-contact-list__card-avatar']
});
