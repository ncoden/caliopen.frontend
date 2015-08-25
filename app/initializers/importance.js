import Importance from '../services/importance';

export function initialize(registry, application) {
  registry.register('service:importance', Importance);
}

export default {
  name: 'importance',
  initialize: initialize
};
