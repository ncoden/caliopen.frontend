import NavItemComponent from '../../../co-navigation-list-item/component';

export default NavItemComponent.extend({

    classNames: ['co-nav-main-actions__action'],

    icon: null,

    click: function (e) {
      this.navigateToFirstLink(e);
    }

});
