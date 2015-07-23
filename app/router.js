import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login", {path: '/login'});
  this.route("discussions", function() {
    this.route("index");
    this.route("new");
    this.route("thread", { path: "/:thread_id" }, function() {
      this.route("index");
      this.route("message", { path: "/:message_id" });
    });
  });
  this.route("contacts", function() {
    this.route("tags", {path: "/tags/:tag_id"});
    this.route("show", {path: "/:contact_id"});
    this.route("new");
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
