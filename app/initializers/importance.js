import Importance from '../services/importance';

export function initialize(container, application) {
  application.register('service:importance', Importance);
  application.inject('adapter', 'importance', 'service:importance');
}

export default {
  name: 'importance',
  initialize: initialize
};
