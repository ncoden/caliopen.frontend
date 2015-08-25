import TabViews from '../services/tab-views';

export function initialize(registry/* , application*/) {
  registry.register('service:tab-views', TabViews);
}

export default {
  name: 'tab-views',
  initialize: initialize
};

