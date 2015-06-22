import Ember from 'ember';

/**
 * A contact media icon
 * When clicked, it triggers the default action.
 *
 * @property action   the action to trigger when the icon is clicked.
 * @property medium   the medium to display icon for.
 */
export default Ember.Component.extend({

  tagName: 'li',

  classNames: ['co-contact-list__card-icons__icon'],

  /**
   * the medium the icon stands for (mail, twitter...)
   */
  medium: null,

  /**
   * @property icon
   *
   * Associated icon depending on medium
   * This returns the name of a `co-widget/icon`.
   */
  icon: Ember.computed('medium', {
    get: function () {
      switch(this.get('medium')) {
        case 'mail':
        case 'email':
          return 'envelope';
        case 'twitter':
          return 'question-sign';
        default:
          return 'question-sign';
      }
    }
  }),

  /**
   * @event
   *
   * trigger default action
   */
  click: function () {
    this.sendAction('action', this.get('medium'));
  }

});
