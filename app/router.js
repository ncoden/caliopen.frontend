import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("mails");
  this.route("settings", function() {
    this.route("account", function() {
      this.route("profile");
      this.route("privacy");
      this.route("security");
    });
    this.route("security", function() {
      this.route("improve");
      this.route("improve-account");
    });
    this.route("app");
  });
  this.resource("contacts", function() {});
  this.route("catchall", {path: '/*wildcard'});
});

export default Router;
