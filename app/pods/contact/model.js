import DS from 'ember-data';

export default DS.Model.extend({

  contact_id: DS.attr('string'),

  firstname: DS.attr('string'),
  lastname: DS.attr('string'),

  adresses: DS.hasMany('contactAddress'),
  phones: DS.hasMany('contactPhone'),
  emails: DS.hasMany('contactEmail'),
  ims: DS.hasMany('contactIm'),
  identities: DS.hasMany('contactIdentity'),
  organizations: DS.hasMany('contactOrganization'),
  keys: DS.hasMany('contactKey')

});
