import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("messages", function() {
    this.route("show", {path: "/:message_id/show"}, function () {});
  });
  this.resource("contacts", function() {
    this.route("show", {path: "/:contact_id/show"});
  });
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
  this.route("catchall", {path: '/*wildcard'});
});

export default Router;
