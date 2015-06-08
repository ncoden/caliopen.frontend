import AuthenticatorCustom from '../../../authenticators/custom';
import {
  module,
  test
} from 'qunit';

module('AuthenticatorCustom', {
  beforeEach: function () {
    this.authenticator = AuthenticatorCustom.create();
  }
});

test('#restore should always reject', function(assert) {
  var done = assert.async();

  this.authenticator
    .restore({
      username: 'foo'
    })
    .then(function onSuccess() {
      assert.ok(true);
      done();
    }, function onError() {
      assert.ok(false, 'should always succeed');
      done();
    });
});

test('#authenticate should always resolve', function(assert) {
  var done = assert.async();

  this.authenticator
    .authenticate({
      username: 'foo'
    })
    .then(function onSuccess() {
      assert.ok(true);
      done();
    }, function onError() {
      assert.ok(false, 'should always resolve');
      done();
    });
});

test('#invalidate should always resolve', function(assert) {
  var done = assert.async();

  this.authenticator
    .authenticate({
      username: 'foo'
    })
    .then(function onSuccess() {
      assert.ok(true);
      done();
    }, function onError() {
      assert.ok(false, 'should always resolve');
      done();
    });
});
