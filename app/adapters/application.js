

import DS from 'ember-data';

var loc = window.location;

export default DS.RESTAdapter.extend({
    host: `${loc.protocol}//${loc.host}`,
    namespace: 'api'
});
