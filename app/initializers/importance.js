import Importance from '../services/importance';

export function initialize(registry/* , application*/) {
  registry.register('service:importance', Importance);
  registry.injection('adapter', 'importance', 'service:importance');
}

export default {
  name: 'importance',
  initialize: initialize
};
