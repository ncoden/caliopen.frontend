import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',

  contact: null,

  attributeBindings: ['src'],

  src: function () {
    if (this.contact.avatar_url) {
      return this.contact.avatar_url;
    }

    return 'http://placehold.it/50x50';
  }.property('contact'),

  classNames: ['co-contact-card__avatar']
});
