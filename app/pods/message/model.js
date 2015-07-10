import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  importance: DS.attr('number'),
  privacy: DS.attr('number'),

});
