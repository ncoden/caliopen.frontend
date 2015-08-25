import PrivacyIndex from '../services/privacy-index';

export function initialize(registry/* , application*/) {
  registry.register('service:privacyIndex', PrivacyIndex);
  registry.injection('adapter', 'privacyIndex', 'service:privacyIndex');
}

export default {
  name: 'privacy-index',
  initialize: initialize
};
