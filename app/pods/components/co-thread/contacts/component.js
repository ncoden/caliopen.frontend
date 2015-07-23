import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  classNames: ['caliopen-threads__thread__contacts'],

  contactList: Ember.computed('contacts.@each.title', {
    get: function () {
      if (!this.get('contacts')) {
        return [];
      }

      let contacts = this.get('contacts').toArray();


      if (contacts.length > 4) {
        let contactList = contacts.slice(0, 3);
        contactList.push({ title: `+${contacts.length - 3}` });

        return contactList;
      }

      return contacts.slice(0, 4);
    }
  })
});
