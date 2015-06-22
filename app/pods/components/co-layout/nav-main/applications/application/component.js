import NavItemComponent from '../../../../co-widget/link-li/component';

export default NavItemComponent.extend({

    classNames: ['co-layout-nav-main-applications__application'],

    icon: null,

    click: function (e) {
      this.navigateToFirstLink(e);
    }

});
