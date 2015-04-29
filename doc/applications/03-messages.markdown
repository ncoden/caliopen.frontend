Messages Application
====================

## Overview

CaliOpen groups conversations not by subject, but by people participating. Those
groups of **Messages** are called **Conversations**.

Each **Messages** and **Conversations** has an associated model.

The Messages application is in charge of the whole message display and business
logic.

## Layout

The Message layout is responsible for displaying messages context actions and
saved filters.

## List Route

The Message list displays messages matching current filters, including privacy
index and importance level.

## Conversation Route

The Conversation view is display the conversation in a scrollable list.
It is possible to respond in the conversation context.

Informations (to be determined) related to the conversation are displayed too.

## New Message Route

The new Message view shows a form to create a new message.

Functionalities to anticipate:

* End to end encryption
* Attach file
* Rich text editing
* contact selection

## Loading State

This application and subroutes has a loading state.

