import DS from 'ember-data';

export default DS.Model.extend({

  contact_id: DS.attr('string'),

  firstname: DS.attr('string'),
  lastname: DS.attr('string'),

  adresses: DS.hasMany('contact-address'),
  phones: DS.hasMany('contact-phone'),
  emails: DS.hasMany('contact-email'),
  ims: DS.hasMany('contact-im'),
  identities: DS.hasMany('contact-identity'),
  organizations: DS.hasMany('contact-organization'),
  keys: DS.hasMany('contact-key'),

  fullname: function () {
    return `${this.get('firstname')} ${this.get('lastname')}`;
  }.property('firstname', 'lastname')

});
