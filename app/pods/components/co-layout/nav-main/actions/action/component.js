import NavItemComponent from '../../../../co-widget/link-li/component';

export default NavItemComponent.extend({

  classNames: ['co-layout-nav-main-actions__action'],

  attributeBindings: ['application:data-application'],

  icon: null,

  application: null,

  click: function (e) {
    this.navigateToFirstLink(e);
  }
});
