import PrivacyIndex from '../services/privacy-index';

export function initialize( container, application) {
  application.register('service:privacy-index', PrivacyIndex);
  application.inject('route', 'privacyIndex', 'service:privacy-index');
  application.inject('model', 'privacyIndex', 'service:privacy-index');
  application.inject('adapter', 'privacyIndex', 'service:privacy-index');
}

export default {
  name: 'privacy-index',
  initialize: initialize
};
