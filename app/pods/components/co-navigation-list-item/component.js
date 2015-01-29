/**
 * navigation-list-item
 * ====================
 *
 * A component to generate a list item, linking to a route.
 * If the route is the current one, then the list item will have an `active`
 * class.
 *
 * This is especially usefull to render [bootstrap](http://getbootstrap.com)'s
 * navs.
 *
 * Sample Tabs
 * -----------
 *
 * @@example
 * ```html
 * <ul class="nav nav-tabs">
 *   {{#navigation-list-item route='mails.index'}}mails{{/navigation-list-item}}
 *   {{#navigation-list-item route='contacts.index'}}contacts{{/navigation-list-item}}
 * </ul>
 * ```
 * @@example
 */
import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'li',

    classNames: [],
    classNameBindings: ['active'],

    active: function(){
        return this.get('childViews').isAny('active');
    }.property('childViews.@each.active'),

    route: 'index',

    willInsertElement: function () {
        Ember.assert('route parameter is mandatory', this.get('route'));
    }
});
