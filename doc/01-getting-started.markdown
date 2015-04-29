CaliOpen Frontend - Getting Started
===================================

## Overview

This document intends to help understanding the application organisation.

CaliOpen Frontend is written with [Ember](http://emberjs.com/).

If you are not familiar with Ember, [Ember guides](http://guides.emberjs.com/)
is a good place to start.

## Services

Service are injected into the application components thanks to [intializers
](http://guides.emberjs.com/v1.11.0/understanding-ember/dependency-injection-and-service-lookup/#toc_dependency-injection-with-code-register-inject-code).

### Authentication

Authentication service is in charge of storing, accessing and mutating
everything related to current user. This includes authentication token, profile,
authentication API.

This service is exposed as `authentication` property on every route and model.

### Privacy

Privacy is a dedicated service in charge of storing the current privacy index
and filter.

This service is exposed as `privacy` property on every route and model.

### Importance

Importance is a dedicated service in charge of storing the current importance
filter.

This service is exposed as `importance` property on every route and model.

### Search

Search is a dedicated service providing the search API.

This service is exposed as `search` where it is needed.

### Session

Application state is a service used to save current application state that is
not directly handled by routing.

This service is exposed as `session` property on every route and model.

## Applications

Each application has its dedicated pod and use nested hierarchy.

### Root Application

The root application is in charge of managing

- Navigation across sub applications
- Authentication management
- Search
- Privacy Index Slider
- Importance Slider
- ...

More about Root Application in [dedicated documentation](./applications/01-root.markdown).

### Account Creation

This application is in charge of user account creation as well of user data
import.

### Connection

This application is in charge of user authentication.

### User Settings

This application is in charge of user configuration, account and settings
management.

### Contacts

This application is in charge of contact management.

### Messages

This application is in charge of contact management.

## UI components

CaliOpen relies on Ember components for the UI.




