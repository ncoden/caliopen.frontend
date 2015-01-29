import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',

  contact: null,

  attributeBindings: ['src'],

  src: function () {
    return this.contact.avatar_url
            ? this.contact.avatar_url
            : 'http://placehold.it/50x50'
  }.property('contact'),

  classNames: ['co-contact-card__avatar']
});
