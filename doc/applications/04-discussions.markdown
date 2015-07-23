Discussions Application
====================

## Overview

CaliOpen groups conversations not by subject, but by people participating. Those
groups of **Messages** are called **Threads**.

Each **Messages** and **Threads** has an associated model.

The Discussions application is in charge of the whole message display and business
logic.

## Layout

The Message layout is responsible for displaying messages context actions and
saved filters.

## index Route

The Discussions list displays threads matching current filters, including privacy
index and importance level.

## thread Route

The thread view displays the conversation in a scrollable list.
It is possible to respond in the conversation context.

Informations (to be determined) related to the conversation are displayed too.

## new Route

The new Message view shows a form to create a new thread.

Functionalities to anticipate:

* End to end encryption
* Attach file
* Rich text editing
* contact selection

## Loading State

This application and sub-routes has a loading state.
