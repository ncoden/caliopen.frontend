import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      console.log('restore', data);
      return reject(data);
    });
  },
  authenticate: function(options) {
    return new Ember.RSVP.Promise(function (resolve/*, reject */) {
      console.log(options);
      return resolve(options);
    });
  },
  invalidate: function(data) {
    return new Ember.RSVP.Promise(function (resolve/*, reject */) {
      console.log('invalidate', data);
      return resolve(data);
    });
  }
});
