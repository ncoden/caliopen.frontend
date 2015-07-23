import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  given_name: DS.attr('string'),
  family_name: DS.attr('string'),
  title: DS.attr('string'),

  adresses: DS.hasMany('contact/address', {async: true}),
  phones: DS.hasMany('contact/phone', {async: true}),
  emails: DS.hasMany('contact/email', {async: true}),
  ims: DS.hasMany('contact/im', {async: true}),
  identities: DS.hasMany('contact/identity', {async: true}),
  organizations: DS.hasMany('contact/organization', {async: true}),
  keys: DS.hasMany('contact/key', {async: true}),

  fullname: Ember.computed('firstname', 'lastname', {
    get: function () {
      return `${this.get('firstname')} ${this.get('lastname')}`;
    }
  }),

  firstname: Ember.computed('given_name', {
    get: function () {
      return this.get('given_name');
    }
  }),

  lastname: Ember.computed('family_name', {
    get: function () {
      return this.get('family_name');
    }
  }),

  thread: DS.hasMany('thread')

});
