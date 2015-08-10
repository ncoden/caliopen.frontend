import DS from 'ember-data';

export default DS.Model.extend({

  subject: DS.attr('string'),
  contacts: DS.hasMany('contact', {async: true}),
  messages: DS.hasMany('message', {async: true}),
  importance: DS.attr('number'),
  privacy: DS.attr('number')
});
