import DS from 'ember-data';

export default DS.Model.extend({

  subject: DS.attr('string'),
  text: DS.attr('string'),
  importance: DS.attr('number'),
  privacy: DS.attr('number'),
  read: DS.attr('boolean'),
  date: DS.attr('date'),
  date_insert: DS.attr('date'),
  sender: DS.belongsTo('contact', { async: true }),
  thread: DS.belongsTo('thread', { async: false })
});
