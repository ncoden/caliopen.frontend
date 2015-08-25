import PrivacyIndex from '../services/privacy-index';

export function initialize( container, application) {
  application.register('service:privacy-index', PrivacyIndex);
}

export default {
  name: 'privacy-index',
  initialize: initialize
};
