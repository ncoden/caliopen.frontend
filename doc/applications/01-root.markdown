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

## Layout

The layout provides some static content and some regions reserved for some
extension views.

There is no way yet to leverage those extension views. It might become a
service.

## Improve Your Account

The layout is in charge of displaying help on how to improve your account.

This process is not designed yet, you can refer to
[mockups](https://caliopen.org/assets/mockup/#p=createaccount) to learn more and
help design it.

## Authentication Management

As every route of the CaliOpen application, the `AuthenticationService` is
injected into the Root Application Route.

The template is in charge of displaying the authenticated layout or not.

A nice resource is the [ember-simple-auth](http://ember-simple-auth.com/) add-on.

## Navigation

Navigation is done thanks to a component.

A `Navigation` service is used to maintain state. Every application is
responsible for updating this service state, it is more flexible.

The navigation bar actions are managed in the Root application, but most of it
is routing, so relies on Ember routing.

- The application route provides the NavigationService data to Controller
- The template pass NavigationService data to `cor-layout/navbar`
- The `cor-layout/navbar` render the whole navigation

When a user clicks a link, the new top level route MUST register the new
application into the NavigationService.

When the user is authenticated, the navigation across available applications is
displayed. When the user is not yet authenticated, the navigation only present
the signin and signup menu.

The `cor-layout/navbar` component is composed of the following parts:

- `cor-layout/navbar/logo`
- `cor-layout/navbar/application-switch`
- `cor-layout/navbar/user-menu`
- `cor-layout/navbar/privacy-index-gauge`

## Search

Search is only available in the case the user is authenticated.

Search allows the user to lookup for quite anything that is indexed into the
backend storage.

Search relies on a component for the UI and a service. The `SearchService` is
injected into the Root Application Route. The route is in charge of passing data
to the Search component.

Search Actions are implemented into the Root Application Route object. Those
actions can either be delegated to SearchService, be implemented into the route
directly or live in a dedicated action object.

## Privacy Index Slider

The Privacy Index is the heart of CaliOpen. When changed, it impacts the data
stored on the client. All stores can be flushed when the values change.

The Privacy Slider is always visible. It constraints in real time the objects to
displayed on the device, as well as the data to fetch.
Whenever the values changes, every store should be updated accordingly.

The Application Root Route is in charge of passing the Privacy Index state to
the slider component.

The privacy slider component actions are implemented in the Application Root
Route.

## Importance Level Slider

Importance Level is important in CaliOpen, but only impacts the displayed data,
stores will NOT be flushed on change.

The Application Root Route is in charge of passing the Importance Level state to
the slider component.

The importance level slider actions are implemented in the Application Root
Route.

