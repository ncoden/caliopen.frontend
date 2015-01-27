import DS from 'ember-data';

export default DS.Model.extend({

  id: DS.attr('string'),

  contact: DS.belongsTo('contact')

});
