import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  label: DS.attr('string'),
  is_primary: DS.attr('boolean'),
  type: DS.attr('string'),

  contact: DS.belongsTo('contact')
});
