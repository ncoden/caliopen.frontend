import Ember from 'ember';

/**
 * some drawbacks here:
 * + There is a deprecation warning about positionalParams I can't deal with
 * + tabViews accept only one entity for the route. so other entities will be ignored in tabs
 */
export default Ember.LinkComponent.extend({
  positionalParams: 'params',
  label: null,

  didReceiveAttrs: function() {
    this.attrs.hasBlock = true;
  },
  tabViews: Ember.inject.service('tab-views'),
  click: function() {
    this.get('tabViews').addTab({ route: this.get('targetRouteName'), entity: this.get('models')[0], label: this.get('label') });
  }
});
