Root Application
================

The root application is in charge of displaying the layout and to tie all
services interaction. This includes:

- Navigation across sub applications
- Authentication management
- Search
- Privacy Index Slider
- Importance Slider
- ...

To do all this, it relies on several top level components and services.

## Authentication Management

As every route of the CaliOpen application, the `AuthenticationService` is
injected into the Root Application Route.

The template is in charge of displaying the authenticated layout or not.

A ice resource is the [ember-simple-auth](http://ember-simple-auth.com/) addon.

## Navigation

Navigation is done thanks to a component.

A `Navigation` service is used to maintain state. Every application is
responsible for updating this service state, it is more flexible.

The navigation bar actions are managed in the Root application, but most of it
is routing, so relies on Ember routing.

- The application route provides the NavigationService data to Controller
- The template pass NavigationService data to `cor-layout/navbar`
- The `cor-layout/navbar` render links

When a user clicks a link, the new top level route MUST register the new
application into the NavigationService.

When the user is authenticated

## Search

Search is only available in the case the user is authenticated.
