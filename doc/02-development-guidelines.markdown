Development Guidelines
======================

To ease transition toward 2.0, we avoid using `Controllers`, instead we use the
technique described in [Future-proofing your Ember 1.x code
](https://gist.github.com/samselikoff/1d7300ce59d216fdaf97).

## Overview

This document intends to help harmonizing the development process to produce
future proof application.

Best practices being a moving thing, this document is subject to adapt over
time.

## Pods

Code is organised into [pods](http://www.ember-cli.com/#pod-structure), so
everything but the application level is organized into its own directory.

Pods ensure an organisation that fits to application routing organisation.

## Routing And Controllers

Ember routing is genuine.

Controllers will be removed in 2.0, so current best practices are to use an
empty `Controller` and return a hash model. For asynchronous processes, using
`Ember.RSVP.hash` is the recommended approach.

``` javascript
//controllers/index.js
import Ember from 'ember';
export default Ember.Controller;

//routes/index.js
model: function() {
    return Ember.RSVP.hash({
        users: this.store.find('user'),
        currentUser: this.get('authentication').getUser()
    });
},

setupController: function(controller, models) {
    controller.setProperties(models);
}
```

## Components

Components are top dogs in Frontend today. The whole UI is composed of
components, no `View` is used.

Components can be of two kind:

- Generic component
- Route component

### Generic Component

A generic component is always prefixed by `co-` for CaliOpen.

A generic component is located into the `components` pod and should not depend
on any injected service.

Use actions to interact with the application context and pass properties to a
component.

### Route Component

A route component is always prefixed by `cor-` for CaliOpen Route.

Ideally route components are stored under the application namespace, but I
did not check feasibility.

A route Component can have services injected, even if the preferred way is to
pass properties using router and controller.

