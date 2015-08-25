export function initialize(instance) {
  instance.inject('adapter', 'importance', 'service:importance');
}

export default {
  name: 'importance',
  initialize: initialize
};

