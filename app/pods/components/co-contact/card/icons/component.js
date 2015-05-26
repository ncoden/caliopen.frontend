import Ember from 'ember';

/**
 * A list of media icons, with an attached action.
 *
 * Note that each medium is represented only once in the list.
 * If a contact has several entries of a medium (let's say several email
 * adresses for instance), mail icon will appear only once.
 *
 * @property action  the action to trigger when an icon is clicked.
 * @property contact the contact to display media icons
 */
export default Ember.Component.extend({

  tagName: 'ul',

  classNames: ['co-contact-list__card-icons'],

  /**
   * the contact of which media icons will be displayed
   */
  contact: null,

  /**
   * Compute all contact media into an array.
   *
   * @return Array
   */
  media: Ember.computed('contact', {
    get: function () {
      var contact = this.get('contact');
      if (!contact) {
        return [];
      }

      return ['twitter', 'mail'];
    }
  }),

  actions: {
    /**
     * this is the default action bound to `co-contact-card-icons-icon`
     * components
     */
    click: function (medium) {
      this.sendAction('action', medium);
    }
  }
});
