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

  fullname: function () {
    return `${this.get('firstname')} ${this.get('lastname')}`;
  }.property('firstname', 'lastname'),

  firstname: function () {
    return this.get('given_name');
  }.property('given_name'),

  lastname: function () {
    return this.get('family_name');
  }.property('family_name')

});
