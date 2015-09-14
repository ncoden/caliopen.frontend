import Ember from 'ember';
import ContactHelper from 'caliopen-frontend/mixins/contact-helper';

export default Ember.Component.extend(ContactHelper, {
  classNames: ['contact-icon'],
  contact: null,
  contactLetterStylesheetClass: Ember.computed('contact.title', {
    get: function() {
      return !!this.contact ? this.getContactStylesheetClass(this.contact) : this.getStylesheetClass('none');
    }
  })
});
