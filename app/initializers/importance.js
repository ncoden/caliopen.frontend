import Importance from '../services/importance';

export function initialize(container, application) {
  application.register('service:importance', Importance);
  application.inject('route', 'importance', 'service:importance');
  application.inject('model', 'importance', 'service:importance');
  application.inject('adapter', 'importance', 'service:importance');
}

export default {
  name: 'importance',
  initialize: initialize
};
