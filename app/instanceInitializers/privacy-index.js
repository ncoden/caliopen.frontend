export function initialize(instance) {
  instance.inject('adapter', 'privacyIndex', 'service:privacy-index');
}

export default {
  name: 'privacy-index',
  initialize: initialize
};
