import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  icon: null,

  classNames: ['glyphicon'],
  classNameBindings: ['iconClass'],

  iconClass: function () {
    return `glyphicon-${this.get('icon')}`;
  }.property('icon')
});
