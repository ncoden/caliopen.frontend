import Ember from 'ember';

let Tab = Ember.Object.extend({
  position: 1,
  label: null,
  route: undefined,
  entity: undefined
});

export default Ember.Service.extend({
  tabs: [],
  addTab: function (args) {
    let {label, route, entity} = args;
    this.get('tabs').pushObject(Tab.create({
      label: label,
      route: route,
      entity: entity
    }));
  },
  removeTab: function(tab) {
    this.set('tabs', this.tabs.filter(currentTab => currentTab !== tab));
  }
});
