

import Ember from 'ember';
import DS from 'ember-data';

var loc = window.location;

export default DS.RESTAdapter.extend({
  host: `${loc.protocol}//${loc.host}`,
  namespace: 'api',
  headers: Ember.computed('importance.formatRange', 'privacyIndex.formatRange', {
    get: function () {
      return {
        'X-CALIOPEN-IMPORTANCE': this.get('importance.formatRange'),
        'X-CALIOPEN-PRIVACY-INDEX': this.get('privacyIndex.formatRange'),
        'X-AUTHENTICATION-TOKEN': 'define me in app/adapters/application.js'
      };
    }
  })
});
